
import "./Home.css";

import  homeBilder from '../home /homeBilder';


const Home = () => {
  return (
    <>
      <h4> TIFFANY & CO.</h4>
      <section className="section-5"><h style={{color:"red"}} > "Hier soll ein Video playen!" </h>
        
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
      <section className="section-one">
         <div className="first-section">
        {homeBilder.length === 0 ? (
          <p>Die Liste ist leer.</p>
        ) : (
          <div className="first-section-child">
            {homeBilder.slice(0, 4).map((item, index) => {
              return (
                <div key={index}>
                  <img
                    className="img"
                    style={{ width: "100%" }}
                    src={item.url}
                    alt={item.title}
                  />
                  <h6 className="h6-name">{item.name}</h6>
                </div>
              );
            })}
          </div>
        )}
      </div>
      </section>
     
      <section className="section-one">
        <div className="first-section">
          {homeBilder.length === 0 ? (
            <p>Die Liste ist leer.</p>
          ) : (
            <div className="first-section-child">
              {homeBilder.slice(4, 10).map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      className="img"
                      src={item.url}
                      alt={item.title}
                    />

                         <h6 className="h6-name">{item.name}</h6>
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
            Love & Engagement <spa>icon {">"} </spa>{" "}
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
            Follow Your Diamond's Jouney <spa>icon {">"} </spa>{" "}
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
