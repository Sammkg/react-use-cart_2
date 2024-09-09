import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import './Cart.css'; // Здесь будут стили для анимации

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false); // Управление состоянием корзины
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) return <h3>Корзина пустая</h3>;

  const toggleCart = () => {
    setIsOpen(!isOpen); // Переключение состояния открытия/закрытия корзины
  };

  return (
    <section className="py-4 container">
      {/* Кнопка для открытия/закрытия корзины */}
      <button className="btn btn-success" onClick={toggleCart}>
        {isOpen ? 'Скрыть корзину' : 'Показать корзину'}
      </button>

      {/* Корзина с анимацией "жалюзи" */}
      <div className={`cart-content ${isOpen ? 'open' : 'closed'}`} >
        <h5>Товары ({totalUniqueItems}) Всего ({totalItems})</h5>
        <table className="table table-light table-hover m-0">
          <thead>
            <tr>
              <th>Изображение</th>
              <th>Название</th>
              <th>Цена</th>
              <th>Количество</th>
              <th>Сумма</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, id) => (
              <tr key={id}>
                <td>
                  <img
                    src={item.img}
                    style={{ height: '4em' }}
                    alt={item.title}
                  />
                </td>
                <td>{item.title}</td>
                <td>$ {item.price}</td>
                <td>({item.quantity})</td>
                <td>{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                  <button
                    className="btn btn-warning"
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(item.id)}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h2>Cумма к оформлению: ${cartTotal.toFixed(2)}</h2>
        </div>
        <div>
          <button className="btn btn-danger mt-3" onClick={() => emptyCart()}>
            Очистить корзину
          </button>
        </div>
      </div>
    </section>
  );
};
