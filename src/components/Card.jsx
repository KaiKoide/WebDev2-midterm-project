import { useContext } from "react";
import { ProductArray } from '../App';

function Card({ book }) {
  const { updateCart } = useContext(ProductArray);

  const handleClick = () => {
    const newBook = {
      id: book.index,
      title: book.title,
      price: book.price,
      image: book.image,
    }

    updateCart(newBook)
  }

  return (
    <>
      <div className="card w-[300px] h-[430px] glass mx-10 font-Roboto" id={book.index}>
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