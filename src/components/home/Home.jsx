import "./Home.css";
import ringImgList from "../products/singleProduct/ringImgList";

const Home = () => {
  return (
    <>
      <h4> GOLDEN & CO.</h4>
      <section className="section-5-video">
        <div className="background-container-video">
          <video controls width="100%">
            <source
              src="https://media.tiffany.com/is/content/tiffanydm/HOLIDAY-HP-FWMH-PRODUCT-10_v1-DESKTOP"
              type="video/mp4"
            />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        <div>
          <h2>Unwrap Joy</h2>
          <p>
            {" "}
            Tiffany holiday gifts have inspired love since 1837.
            <br />
            Discover our most coveted designs for this season and beyond.
          </p>
          <button className="button">Sing up</button>
        </div>
      </section>
      <section className="section-one">
        <div className="first-section">
          {ringImgList.length === 0 ? (
            <p>Die Liste ist leer.</p>
          ) : (
            <div className="first-section-child">
              {ringImgList.slice(43, 47).map((item, index) => {
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
          {ringImgList.length === 0 ? (
            <p>Die Liste ist leer.</p>
          ) : (
            <div className="first-section-child">
              {ringImgList.slice(47, 53).map((item, index) => {
                return (
                  <div key={index}>
                    <img className="img" src={item.url} alt={item.title} />

                    <h6 className="h6-name">{item.name}</h6>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <section className="section-3-background">
        <div className="section-3-background-container"></div>
        <div>
          <h2>A Brilliant Proposal</h2>
          <p>
            {" "}
            In 1886, Tiffany introduced the engagement
            <br />ring as we know it. This holiday, write the
             <br />next chapter of your love story.
          </p>
          <a href="/link1">
            Love & Engagement <span>icon {">"} </span>{" "}
          </a>
        </div>
      </section>
      <section className="section-4">
        <div className="div-left-section-4" >
          <h2>From the Source</h2>
          <p>
            {" "}
            Handcrafting the world’s best diamonds
            <br />starts with knowing where they come from.
             <br />We proudly trace 100% of our rough
            <br />
            diamonds to known mines and sources.
          </p>
          <a href="/link1">
            Follow Your Diamond's Jouney <span>icon {">"} </span>{" "}
          </a>
        </div>
        <div className="background-container-4"></div>
      </section>
      <section className="section-6-background">
        <div className="background-container"></div>
        <div>
          <h2>At Your Service</h2>
          <p>
            {" "}
            <br />
            From finding the present to product personalization,
            <br />master the art
            of holiday
            gifting with a little help from
            <br />Tiffany & Co. Client Advisors.
          </p>
          <button className="button">Sing up</button>
        </div>
      </section>
    </>
  );
};

export default Home;
