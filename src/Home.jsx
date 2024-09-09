import React from 'react';
import { ItemCard } from './itemCard';
import { data}  from './data';

export function Home () {
    // console.log(data.productName)
  return (
    <>
      <h1 className='text-center mt-3'>Баардык товарлар</h1>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
          {
            data.productName.map((item) => {
              return (
                <ItemCard 
                  img={item.img} 
                  title={item.title} 
                  item={item}
                  description={item.desc} 
                  price={item.price} 
                  key={item.id} 
                />
              );
            })
          }
        </div>
        <button className='btn btn-primary mt-3'>Оформить заказ</button>
      </section>
    </>
  );
}



