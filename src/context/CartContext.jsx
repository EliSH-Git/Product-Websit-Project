import React, { createContext, useState } from "react";

export const CartContext = createContext();


function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [newCartItems, setNewCartItems] = useState("");

  const addToCart = (event) => {
    event.preventDefault();
    if (newCartItems.length > 0) {
      setCartItems([...cartItems, newCartItems]);
      setNewCartItems("");
    }
  };

  const removeFormCart = (productId) => {
    const updateCartItems = cartItems.filter((item) => item.id !== productId);
      setCartItems(updateCartItems);
       console.log('Product removed from the cart');
  };
    
  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <>
          <CartContext.Provider value={{ cartItems, addToCart, removeFormCart, clearCart }}>
              {children}
          </CartContext.Provider>
    </>
  );
}

export default CartProvider;

