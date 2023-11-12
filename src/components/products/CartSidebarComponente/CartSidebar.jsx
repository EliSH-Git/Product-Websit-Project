// ****************************************************************

// import React, { useContext, useState } from "react";
// import { CartContext } from "../../../context/CartContext";
// import "./CartSidebar.css";

// function CartSidebar() {
//   const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

//   const [newCartItems, setNewCartItems] = useState({
//     id: 1,
//     name: "",
//     price: 0,
//     url: "",
//   });

//   const addToCartHandler = (event) => {
//     event.preventDefault();
//     if (
//       newCartItems.name &&
//       newCartItems.price &&
//       newCartItems.url &&
//       newCartItems.id
//     ) {
//       addToCart(newCartItems);
//       setNewCartItems({ id: 1, name: "", price: 0, url: "" });
//       console.log("Product added to the cart");
//     } else {
//       console.error("Invalid product data");
//     }
//   };

//   return (
//     <div className="cart">
//       <h2>CartSidebar & Warenkorb</h2>

//       <div>
//         <input
//           type="text"
//           value={newCartItems.name}
//           onChange={(e) =>
//             setNewCartItems({ ...newCartItems, name: e.target.value })
//           }
//           placeholder="Enter product name"
//         />
//         <button onClick={ (e) => addToCartHandler(e) }>Add to cart</button>
//       </div>
//       <div>
//         {cartItems.length === 0 ? (
//           <p>The list is empty.</p>
//         ) : (
//           cartItems.map((cartItem) => {
//             return (
//               <div key={cartItem.id} className="div-box">
//                 <div className="div-img">
//                   <img src={cartItem.url} alt={cartItem.name} />
//                 </div>
//                 <div className="div-name-price">
//                   <p>{cartItem.name}</p>
//                   <p>{cartItem.price}$ </p>
//                 </div>
//                 <button onClick={() => removeFromCart(cartItem.id)}>
//                   Remove
//                 </button>
//               </div>
//             );
//           })
//         )}
//       </div>

//       <button onClick={clearCart}>Warenkorb leeren</button>
//     </div>
//   );
// }

// export default CartSidebar;


import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartSidebar.css";

function CartSidebar() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  const [newCartItem, setNewCartItem] = useState({
    id: 1,
    name: "",
    price: 0,
    url: "",
  });

  const handleAddToCart = () => {
    if (newCartItem.name && newCartItem.price && newCartItem.url && newCartItem.id) {
      addToCart(newCartItem);
      setNewCartItem({ id: 1, name: "", price: 0, url: "" });
      console.log("Product added to the cart");
    } else {
      console.error("Invalid product data");
    }
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    // Wenn das entfernte Element dem aktuellen Eingabefeld entspricht, setze das Eingabefeld zurück
    if (newCartItem.id === id) {
      setNewCartItem({ id: 1, name: "", price: 0, url: "" });
    }
  };

  return (
    <div className="cart">
      <h2>CartSidebar & Warenkorb</h2>

      <div>
        <input
          type="text"
          value={newCartItem.name}
          onChange={(e) => setNewCartItem({ ...newCartItem, name: e.target.value })}
          placeholder="Enter product name"
        />
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
      
      <div>
        {cartItems.length === 0 ? (
          <p>The list is empty.</p>
        ) : (
          cartItems.map((cartItem) => (
            <div key={cartItem.id} className="div-box">
              <div className="div-img">
                <img src={cartItem.url} alt={cartItem.name} />
              </div>
              <div className="div-name-price">
                <p>{cartItem.name}</p>
                <p>{cartItem.price}$ </p>
              </div>
              <button onClick={() => handleRemoveFromCart(cartItem.id)}>Remove</button>
            </div>
          ))
        )}
      </div>

      <button onClick={clearCart}>Warenkorb leeren</button>
    </div>
  );
}

export default CartSidebar;

