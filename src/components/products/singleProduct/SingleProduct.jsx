import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ringImgList from "./ringImgList.json";
import CartSidebar from "../cartSidebarComponente/CartSidebar";
const SingleProduct = () => {
  const { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  useEffect(() => {
    const product = ringImgList.find((item) => item.id === Number(productId));
    if (!product) {
      return <p>Product not found</p>;
    } else {
      setCurrentProduct(product);
    }
  }, []);
  return (
    <div className="single-product-container">
      <h1>SingleProduct</h1>
      <h1>{currentProduct.name}</h1>
      <img src={currentProduct.url} alt={currentProduct.name} />
      <p>{currentProduct.price}$</p>
      <p>{currentProduct.brand}</p>
      <p>{currentProduct.name}</p>
      <Link to="/products">Back to Products</Link>
      <CartSidebar productId={productId} cartData={currentProduct} />
    </div>
  );
};
export default SingleProduct;
