import { useContext } from "react";
import { ProductArray } from '../App';
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";



function ShoppingCart({
  // Visibility for the shopping cart
  visibility,
  // This prop will be run when we want to close the cart
  onClose,
}) {
  const { cartProducts, setCartProducts, updateCart } = useContext(ProductArray);

  const onRemoveProduct = (removedProduct) => {
    const newCartProducts = cartProducts.filter(product => product.id !== removedProduct.id);
    setCartProducts(newCartProducts);
  }

  const onRemoveAllProducts = () => {
    setCartProducts([]);
  }

  const totalAmount = cartProducts.reduce((amount, product) => amount + (product.price * product.qty), 0);
  const formattedAmount = (amount) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD'
    })
    .format(amount)};

  const handleClick = (product, qty) => {
    updateCart(product, qty);
  };

  return (
    <>
      <div
        className='fixed inset-0 w-full h-full !bg-[#00000055] z-10'
        style={{
          display: visibility
            ? "block"
            : "none"
        }}>
        <div className='rounded-md w-1/2 h-[90%] my-8 mx-auto bg-[#eee] p-4 flex flex-col relative text-slate-800 font-Roboto'>
          <div className='header-custom p-3 rounded-md bg-white py-2.5 px-5 flex justify-between'>
            <h2 className='text-3xl font-bold capitalize'>shopping cart</h2>
            <button  className='close-btn text-2xl duration-200 hover:opacity-50' onClick={onClose}>
              <AiFillCloseCircle />
            </button>
          </div>
          <div className='flex flex-col items-center py-4 overflow-y-scroll'>
            {cartProducts.length === 0 && (
              <span className='empty-text font-bold block p-8 m-auto'>
                Your basket is currently empty
              </span>
            )}
            {cartProducts.map(product => (
              <div className='rounded-md flex flex-row justify-between items-center w-full bg-white py-2.5 px-5 gap-3 border-solid border-4 border-[#eee]' key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-[100px] bg-white'
                />
                <div className='basis-[50%]'>
                  <h3 className='font-normal text-base'>
                    {product.title}
                  </h3>
                  <span>{formattedAmount(product.price * product.qty)}</span>
                </div>
                <div className="flex justify-between items-center text-[20px] bg-text px-5 rounded-full">
                  <button disabled={product.qty < 2} className="w-6 h-6 cursor-pointer hover:opacity-50" onClick={() => handleClick(product, -1)}>
                    <AiOutlineMinusCircle />
                  </button>
                  <p className="px-3">{product.qty}</p>
                  <button className="w-6 h-6 cursor-pointer hover:opacity-50" onClick={() => handleClick(product)}>
                    <AiOutlinePlusCircle />
                  </button>
                </div>
                <div>
                  <button></button>
                </div>
                <button className='btn remove-btn text-2xl' onClick={() => onRemoveProduct(product)}>
                  <RiDeleteBin6Line />
                </button>
              </div>
            ))}
            <div className='text-2xl font-bold capitalize my-4'>Total: <span>{formattedAmount(totalAmount)}</span></div>
            <div className='flex gap-3'>
              {cartProducts.length > 0 && <button className='btn bg-slate-800 py-2.5 px-5 text-base text-white self-center my-4' onClick={onRemoveAllProducts}>All Clear</button>}
              {cartProducts.length > 0 && <button className='btn bg-slate-800 py-2.5 px-5 text-base text-white self-center my-4'>Proceed to checkout</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart