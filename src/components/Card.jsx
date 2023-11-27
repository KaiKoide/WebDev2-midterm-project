import React from "react";
import ReactDOM from 'react-dom/client'
import { useState } from "react";

function Card({ book }) {
  const [piece, setPiece] = useState(0);

  const handleClick = () => {
    setPiece(piece + 1);
  }

  return (
    <>
      <div className="card w-[300px] h-[430px] glass mx-10" key={book.index}>
        <figure><img src={book.picture} alt="book" /></figure>
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <p>{book.name}</p>
          <p>{book.price}</p>
          <p>{piece}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-slate-800 text-zinc-200 capitalize" onClick={handleClick}>add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card