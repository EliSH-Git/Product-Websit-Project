import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ringImgList from "./ringImgList.json";
import CartSidebar from "../cartSidebarComponente/CartSidebar";
import "./SingleProduct.css"; 
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
  
    <div className="cartSidbar-container">
      {/* <h1>SingleProduct</h1>
      <h1>{currentProduct.name}</h1>
      <img src={currentProduct.url} alt={currentProduct.name} />
      <p>{currentProduct.price}$</p>
      <p>{currentProduct.brand}</p>
      <p>{currentProduct.name}</p> */}
     <CartSidebar productId={productId} cartData={currentProduct} />
      <section className="section-1">
        <div className="cartSidbar-images">
          <Link to="/products"> <h5 className="h5-marg">Back to Jewelry</h5></Link>
          {ringImgList.length === 0 ? (
            <p>The list is empty.</p>
          ) : (          
              <div className="div-left">
                {ringImgList.slice(59, 66).map((item) => (
                  <div key={item.id} className="product-item-div-left">
                      <img
                        className="products-img"
                        src={item.url}
                        alt={item.name}
                      />                   
                  </div>
                ))}
              </div>            
          )}
        </div>         
      </section>
      <section className="section-2">
        <div className="experience-p">
          <h2>The Golden Experience</h2>
          <p>When you choose Golden & Co., you become a valued member of the <br />
            Golden family. Since 1825, we’ve prided ourselves on providing <br/> premium service, a
            tradition that continues to this day.</p>
        </div>
        {/* <div>
          <h3>Complimentary Shipping & Returns</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p><hr></hr>
          <h3>Ask a Client Advisor</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p><hr></hr>
          <h3>Blue Box</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p><hr></hr>
          <h3>Responsibly Sources</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p><hr></hr>
          <h3>Size Guide</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p><hr></hr>
          <h3>Visit a Store</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p><hr></hr>
        </div> */}
        
      </section>
      <section className="section-3">
         <div className="div-section-3">
          {ringImgList.length === 0 ? (
            <p>The list is empty.</p>
          ) : (          
              <div className="sidbar-section-3">
                {ringImgList.slice(66, 70).map((item) => (
                  <div key={item.id} className="img-section-3">
                      <img
                        className="products-img"
                        src={item.url}
                        alt={item.name}
                      />                   
                  </div>
                ))}
              </div>            
          )}
        </div>

        </section>
      
        <section className="sidebar-section-5">
        
        <div className="experience-p bg">
          <h2>Golden Knot</h2>
          <p>
            {" "}
            <br />
            Dazzling diamonds, bold designs and coveted classics-a
            <br />
            gift from Tiffany opens up a world of wonder for the holidays.
          </p>
          <a href="/link1">
            Shop The Collection <span>icon {">"} </span>{" "}
          </a>
        </div>
        <div className="div-Knot-Desktop-armband">
          <img
            className="Knot-Desktop"
            src="https://media.tiffany.com/is/image/tiffanydm/Knot-PDP-Desktop?$tile$&wid=3200&hei=1520&fmt=webp"
            alt=" Knot-Desktop"
          />
        </div>
      </section>
       
    </div>
  );
};
export default SingleProduct;
