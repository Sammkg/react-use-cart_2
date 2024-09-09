import React from 'react';
import { useCart } from 'react-use-cart';

export const ItemCard = (props) => {
    const { addItem } = useCart();
    
  return (
    <div className="card" style={{ width: '14rem' }}>
      <img src={props.img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <h3>$ {props.price}</h3>
        <button className='btn btn-primary' 
            onClick={()=> addItem(props.item)}>
            Добавить в корзину
        </button>
      </div>
    </div>
  );
}


const style = {
  width: '200px',
};
