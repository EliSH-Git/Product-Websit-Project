import  { createContext, useState } from "react";
export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (data) => {
    if (data) {
      setCartItems([...cartItems, data]);
    }
  };

  const removeFromCart = (productId) => {
    const updateCartItems = cartItems.filter((item) => item.id !== productId);
      setCartItems(updateCartItems);
  };
  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <>
          <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
              {children}
          </CartContext.Provider>
    </>
  );
}
export default CartProvider;