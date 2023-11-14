import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartSidebar.css";

function CartSidebar({cartData}) {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  //console.log(cartItems)
  const addToCartHandler = () => {
    if (
      cartData.name
    ) {
      addToCart(cartData);
    } else {
      console.log("Invalid product data");
    }
  };

  const removeHandleCart = (id) =>{
    removeFromCart(id)
  }
  return (
    <div className="cart">
      <h2>CartSidebar & Warenkorb</h2>
      <div>
        <button onClick={ addToCartHandler}>Add to cart</button>
      </div>
      <div>
        {cartItems.length === 0 ? (
          <p>The shopping cart is empty.</p>
        ) : (
          <div> 
          {cartItems.map((cartItem) => {
            return (
              <div key={cartItem.id} className="div-box">
                <h3>Goods for purchase:</h3>
                <div className="div-img-warenkorb">
                  <img className="div-img" src={cartItem.url} alt={cartItem.name} />
                </div>
                <div className="div-name-price">
                  <p>{cartItem.name}</p>
                  <p>{cartItem.price}$ </p>
                </div>
                <button onClick={() =>removeHandleCart(cartItem.id)}>
                 DLETE
                </button>
              </div>
            );
          })}
        </div>
        )}
      </div>
      <button onClick={clearCart}>CLEAR</button>
    </div>
  );
}
export default CartSidebar;