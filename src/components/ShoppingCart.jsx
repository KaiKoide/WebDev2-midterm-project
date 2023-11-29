import react from 'react';
import "../style/shoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
  // Visibility for the shopping cart
  visibility,
  // Products in the shopping cart
  products,
  // This prop will be run when we want to remove the products
  onProductRemove,
  // This prop will be run when we want to close the cart
  onClose,
  // This prop will be run when we want to change a quantity of a product in the cart
  onQuantityChange,
  addProductToCart
}) {

  return (
    <>
      <div
        className='modal-custom'
        style={{
          display: visibility
            ? "block"
            : "none"
        }}>
        <div className='shopping-cart'>
          <div className='header-custom'>
            <h2>shopping cart</h2>
            <button  className='btn close-btn' onClick={onClose}>
              <AiFillCloseCircle />
            </button>
          </div>
          {/* <div className='cart-products'>
            {products.length === 0 && (
              <span className='empty-text'>
                Your basket is currently empty
              </span>
            )}
            {products.map(product => (
              <div className='cart-product' key={product.id}>
                <img
                  src={product.picture}
                  alt={product.title}
                />
                <div className='product-info'>
                  <h3>
                    {product.title}
                  </h3>
                  <span className='product-price'>
                    {product.price * product.count}
                  </span>
                </div>
                <select className='count' value={product.count} onChange={(event) => {
                  onQuantityChange(product.id, event.target.value);
                }}>
                  {
                    [...Array(10).keys()].map(number => {
                      const num = number + 1;
                      return <option value={num} key={num}>{num}</option>
                    })
                  }
                </select>
                <button className='btn remove-btn' onClick={() => onProductRemove(product)}>
                  <RiDeleteBin6Line />
                </button>
              </div>
            ))}
            {products.length > 0 && <button className='btn checkout-btn'>Proceed to checkout</button>}
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ShoppingCart