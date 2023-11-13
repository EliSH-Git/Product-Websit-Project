

// ________________________________________________________________________________________________________________
import "./products.css";

 import productsData from "../productsData.json";
import ringImgList from "../singleProduct/ringImgList";
// import SingleProduct from "../singleProduct/SingleProduct.jsx";
import { Link } from "react-router-dom";


function Products() {
  return (
    <>
     
      <div className="products-container">
        <h2 className="title">Rings</h2>
        {productsData.length === 0 ? (
          <p>The list is empty.</p>
        ) : (
          <div className="product-list">
              {productsData.map((item) => (
              
                <div key={item.id} className="product-item">
                  <Link to={`/products/${item.id}`}>
                <img
                  className="products-img"
                  src={item.url}
                  alt={item.name}
                    />
                     <h6 style ={{textAlign: "center"}}>{item.name}</h6>
              </Link>
               
               
               
              </div>
            ))}
          </div>
        )}
      </div>

      <section>
        <div className="products-container">
          <h6 className="showing">
            Showing 1-60 of 451 <a href="">View ALL</a>
          </h6>
          {ringImgList.length === 0 ? (
            <p>The list is empty.</p>
          ) : (
            <div className="product-list">
              {ringImgList.slice(0, 8).map((item) => (
                <div key={item.id} className="product-item-sectionTwo">
                  <button className="btn"> {item.new} </button>
                  <Link to={`/products/${item.id}`}>
                    <img
                    className="products-img"
                    src={item.url}
                    alt={item.name}
                  /></Link>
                  
                 
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="products-container">
          {ringImgList.length === 0? (
            <p>The list is empty.</p>
          ) : (
              <div className="product-list-section-three">
                <div className="div-img-HOLIDAY-ring">
                  <img
                    className="HOLIDAY-RING"
                    src="src/components/products/ringBilder/HOLIDAY.webp"
                    alt=" HOLIDAY-RING " />
                </div>
                <div className="div-right">
                  {ringImgList.slice(8, 12).map((item) => (
                     
                    <div key={item.id} className="product-item-div-right">
                      
                      <button className="btn"> {item.new} </button>
                      <Link to={`/products/${item.id}`}>
                        <img
                    className="products-img"
                    src={item.url}
                    alt={item.name}
                  /></Link> 
                  
                 
                </div>
              ))}
                </div>
             
            </div>
          )}
        </div>
      </section>

       <section>
        <div className="products-container">

          {ringImgList.length === 0 ? (
            <p>The list is empty.</p>
          ) : (
            <div className="product-list">
              {ringImgList.slice(12, 40).map((item) => (
                <div key={item.id} className="product-item-sectionTwo">
                  <button className="btn"> {item.new} </button>
                  <Link to={`/products/${item.id}`}>
                  <img
                    className="products-img"
                    src={item.url}
                    alt={item.name}
                  /></Link> 
                 
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
     <section className="section-5">
        <div className="div-holiday-armband">
          <img
                    className="HOLIDAY-ARMBAND"
                    src="src/components/products/ringBilder/HOLIDAY-ARMBAND.webp"
                    alt=" HOLIDAY-ARMBAND " />
         </div>
        <div>
          <h2>Unwrap the Possibilities</h2>
          <p>
            {" "}
            
             <br />Dazzling diamonds, bold designs and coveted classics-a 
             <br />gift from Tiffany opens up a world of wonder for the holidays.
          </p>
          <button className="button">Shop Holiday Gifts</button>
        </div>
      </section>

      <section>
        <div className="products-container">
        <h2 className="title">Shop by Category</h2>
        {ringImgList.length === 0 ? (
          <p>The list is empty.</p>
        ) : (
          <div className="div-product-list">
                {ringImgList.slice(40, 43).map((item) => (
              
                  <div key={item.id} className="product-item">
                       <Link to={`/products/${item.id}`}>
                <img
                  className="products-img"
                  src={item.url}
                  alt={item.name}
                /></Link>
              
                <h6 style ={{textAlign: "center"}} >{item.name}</h6>
              </div>
            ))}
          </div>
        )}
      </div>
      </section>
        
    </>
  );
}

export default Products;
