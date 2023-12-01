import "../style/shoppingCart.css";
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
        className='modal-custom'
        style={{
          display: visibility
            ? "block"
            : "none"
        }}>
        <div className='shopping-cart rounded-md'>
          <div className='header-custom p-3 rounded-md'>
            <h2 className='text-3xl font-bold capitalize'>shopping cart</h2>
            <button  className='close-btn text-2xl duration-200 hover:opacity-50' onClick={onClose}>
              <AiFillCloseCircle />
            </button>
          </div>
          <div className='cart-products'>
            {cartProducts.length === 0 && (
              <span className='empty-text font-bold'>
                Your basket is currently empty
              </span>
            )}
            {cartProducts.map(product => (
              <div className='cart-product rounded-md' key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className='w-[200px]'
                />
                <div className='product-info'>
                  <h3>
                    {product.title}
                  </h3>
                  <span className='product-price'>
                    {formattedAmount(product.price * product.qty)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[20px] bg-text px-5 rounded-full">
                  {product.qty > 1 &&
                    <button className="svg-accent w-6 h-6 cursor-pointer hover:opacity-50" onClick={() => handleClick(product, -1)}>
                      <AiOutlineMinusCircle />
                    </button>
                  }
                  <p id="number-of-items" className="px-3">{product.qty}</p>
                  <button className="svg-accent w-6 h-6 cursor-pointer hover:opacity-50" onClick={() => handleClick(product)}>
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
            <div className='text-2xl font-bold capitalize'>Total: <span>{formattedAmount(totalAmount)}</span></div>
            <div className='flex gap-3'>
              {cartProducts.length > 0 && <button className='btn checkout-btn bg-slate-800' onClick={onRemoveAllProducts}>All Clear</button>}
              {cartProducts.length > 0 && <button className='btn checkout-btn bg-slate-800'>Proceed to checkout</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart