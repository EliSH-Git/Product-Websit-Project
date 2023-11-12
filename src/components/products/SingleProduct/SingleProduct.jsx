// SingleProduct.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import ringImgList from "../ringImgList.json";
import CartSidebar from "../CartSidebarComponente/CartSidebar";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = ringImgList.find((item) => item.id === Number(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="single-product-container">
      <h1>SingleProduct</h1>
      <h1>{product.name}</h1>
      <img src={product.url} alt={product.name} />
      <p>{product.price}$</p>
      <p>{product.brand}</p>
      <p>{product.name}</p>

      <Link to="/products">Back to Products</Link>
      <CartSidebar cartData = {ringImgList} />
      
    </div>
  );
};

export default SingleProduct;




