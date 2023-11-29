import React from "react";
import ReactDOM from 'react-dom/client';
import { useState, useContext } from "react";
import { ProductArray } from '../App';

function Card({ book }) {
  const { cartProducts, setCartProducts } = useContext(ProductArray);

  // const [piece, setPiece] = useState(0);

  const handleClick = (e) => {
    console.log('click!!!!');
    const card = e.target.parentElement.parentElement.parentElement;
    // console.log(card);
    const id = card.id;
    const title = card.querySelector('h2').textContent;
    const price = card.querySelector('.card-price').textContent;
    const image = card.querySelector('img').src;
    // console.log(title);
    // console.log(name);
    // console.log(price);
    // console.log(id);
    // console.log(image);

    const updateArray = [
      ...cartProducts,
      // {
      //   id: id,
      //   title:title,
      //   name:name,
      //   price:price,
      //   image:image
      // }
      {id, title, price, image}
    ]
    // onClick(updateArray);
    console.log(updateArray);
    setCartProducts(updateArray);

  }

  return (
    <>
      <div className="card w-[300px] h-[430px] glass mx-10" id={book.index}>
        <figure><img src={book.picture} alt="book" /></figure>
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <p className="card-author">{book.name}</p>
          <p className="card-price">${book.price}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-slate-800 text-zinc-200 capitalize" onClick={handleClick}>add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card