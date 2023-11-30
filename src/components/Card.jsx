import React from "react";
import ReactDOM from 'react-dom/client';
import { useState, useContext } from "react";
import { ProductArray } from '../App';

function Card({ book }) {
  const { cartProducts, updateCart } = useContext(ProductArray);

  const handleClick = () => {
    // console.log(cartProducts);
    // console.log(book);

    const newBook = {
      id: book.index,
      title: book.title,
      price: book.price,
      image: book.image,
      qty: 1
    }

    updateCart(newBook)


    // setCartProducts(prevArr => {
    //   console.log(prevArr);
    //   console.log(book);
    //   const fn = prevArr.find((el) => el.id === book.index);

    //   if (fn) {
    //     console.log('true');
    //     return [...prevArr,
    //       {
    //         ...prevArr,
    //         qty: prevArr.qty + 1
    //       }
    //     ];
    //   } else {
    //     console.log('false');
    //     [...prevArr,
    //       {
    //         id: book.index,
    //         title: book.title,
    //         price: book.price,
    //         image: book.image,
    //         qty: 1
    //       }
    //     ];
    //   }
    //     [
    //       ...cartProducts,
    //       {
    //         id: book.index,
    //         title: book.title,
    //         price: book.price,
    //         image: book.image
    //       }
    //     ]
    // });
    // console.log(cartProducts);


    // Unnecessary codes
    // const updateArray = [
    //   ...cartProducts,
    //   {
    //     id: book.index,
    //     title: book.title,
    //     price: book.price,
    //     image: book.image
    //   }
    // ]
    // setCartProducts(updateArray);
  }

  return (
    <>
      <div className="card w-[300px] h-[430px] glass mx-10" id={book.index}>
        <figure><img src={book.image} alt="book" /></figure>
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <p className="card-author">{book.author}</p>
          <p className="card-price before:content-['$']">{book.price}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-slate-800 text-zinc-200 capitalize" onClick={handleClick}>add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card