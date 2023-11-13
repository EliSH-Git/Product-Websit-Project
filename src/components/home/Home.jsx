import React from "react";
import "./Home.css";
const image = [
  {
    url: "https://media.tiffany.com/is/image/tiffanydm/HOLIDAY-MWTS-988x988-GiftsForHer-1?$tile$&wid=988&hei=988&fmt=webp",
    title: "Bild 1",
  },
  {
    url: "https://media.tiffany.com/is/image/tiffanydm/HOLIDAY-Product-MktgTile-EXC-4?$tile$&wid=988&hei=988&fmt=webp",
    title: "Bild 2",
  },
  {
    url: "https://media.tiffany.com/is/image/tiffanydm/HOLIDAY-MWTS-988x988-GiftsForHome-1?$tile$&wid=988&hei=988&fmt=webp",
    title: "Bild 3",
  },
  {
    url: "https://media.tiffany.com/is/image/tiffanydm/HOLIDAY-MWTS-988x988-GiftsForHim-1?$tile$&wid=988&hei=988&fmt=webp",
    title: "Bild 5",
  },
];

const imageTwo = [
  {
    url: "https://media.tiffany.com/is/image/tiffanydm/Necklace_op3?$tile$&&fmt=webp",
    title: "Bild 1",
  },
  {
    url: "https://media.tiffany.com/is/image/tiffanydm/Rings?$tile$&&fmt=webp",
    title: "Bild 2",
  },
  {
    url: "https://media.tiffany.com/is/image/tiffanydm/Earrings?$tile$&&fmt=webp",
    title: "Bild 3",
  },
  {
    url: "https://media.tiffany.com/is/image/tiffanydm/Bracelet?$tile$&&fmt=webp",
    title: "Bild 4",
  },
  {
    url: "https://media.tiffany.com/is/image/tiffanydm/EngagementRings?$tile$&&fmt=webp",
    title: "Bild 5",
  },
  {
    url: "https://media.tiffany.com/is/image/tiffanydm/HomeDecor?$tile$&&fmt=webp",
    title: "Bild 5",
  },
];

const Home = () => {
  return (
    <>
      <h4> TIFFANY & CO.</h4>
      <section className="section-5"><h2 style={{color:"red"}} > "Hier soll ein Video playen!" </h2>
        
        <div className="background-container-video"></div>
        <div>
          <h2>Unwrap Joy</h2>
          <p>
            {" "}
                Tiffany holiday gifts have inspired love since 1837. 
             <br />Discover our most coveted designs for this season and beyond.
          </p>
          <button className="button">Sing up</button>
        </div>
      </section>
      <div className="first-section">
        {image.length === 0 ? (
          <p>Die Liste ist leer.</p>
        ) : (
          <div className="first-section-child">
            {image.map((item, index) => {
              return (
                <div key={index} style={{ width: "150px" }}>
                  <img
                    className="img"
                    style={{ width: "100%" }}
                    src={item.url}
                    alt={item.title}
                  />

                  <p>das hier ist bild nummer: {index}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <section>
        <div className="first-section">
          {image.length === 0 ? (
            <p>Die Liste ist leer.</p>
          ) : (
            <div className="first-section-child">
              {imageTwo.map((item, index) => {
                return (
                  <div key={index} style={{ width: "150px" }}>
                    <img
                      className="img"
                      style={{ width: "100%" }}
                      src={item.url}
                      alt={item.title}
                    />

                    <p>das hier ist bild nummer: {index}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <section className="section-3">
        <div className="background-container"></div>
        <div>
          <h2>A Brilliant Proposal</h2>
          <p>
            {" "}
            In 1886, Tiffany introduced the engagement ring as we know it.
            <br />
            This holiday, write the next chapter of your love story.
          </p>
          <a href="/link1">
            Love & Engagement <span>icon {">"} </span>{" "}
          </a>
        </div>
      </section>
      <section className="section-4">
        <div>
          <h2>From the Source</h2>
          <p>
            {" "}
            Handcrafting the world’s best diamonds starts with knowing
             <br />where they come from. We proudly trace 100% of our rough
             <br />diamonds to known mines and sources.
          </p>
          <a href="/link1">
            Follow Your Diamond's Jouney <span>icon {">"} </span>{" "}
          </a>
        </div>
        <div className="background-container-two"></div>
      </section>
      <section className="section-5">
         <div className="background-container-three"></div>
        <div>
          <h2>At Your Service</h2>
          <p>
            {" "}
            
             <br />From finding the present to product personalization, master the art of holiday 
             <br />gifting with a little help from Tiffany & Co. Client Advisors.
          </p>
          <button className="button">Sing up</button>
        </div>
      </section>
    </>
  );
};

export default Home;
