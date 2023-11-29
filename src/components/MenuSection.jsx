import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card'
import fetchData from '../fetchData'
import { useState, useEffect } from 'react'


const RenderBooksInCards = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const updateBooks = async () => {
      const data = await fetchData();
      setBooks(data);
    };
    updateBooks();
  }, []);

  if (books.length === 0) {
    return <div>...Loading!</div>;
  }

  return (
    <>
      {books.map((book, index) => {
        return <Card book={book} key={index} />;
      })}
    </>
  )
}

function MenuSection() {
  return (
    <>
      <section id='menu' className='bg-slate-800 text-zinc-200 py-10'>
        <h2 className='text-center uppercase my-8 text-4xl'>products</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-10 justify-items-center items-center place-items-center place-content-center w-[75%] mx-auto'>
          <RenderBooksInCards />
        </div>
      </section>
    </>
  )
}

export default MenuSection

