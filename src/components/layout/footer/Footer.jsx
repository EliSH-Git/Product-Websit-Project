import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-link">
        <h6> Client Care</h6>

        <div>
          <a href="/link1"> Contact Us </a>
        </div>
        <div>
          <a href="/link1">Track Your Order </a>
        </div>
        <div>
          <a href="/link1">Product Care & Repair </a>
        </div>
        <div>
          <a href="/link1">Book an Appointment </a>
        </div>
        <div>
          <a href="/link1">Frequently Asked Questions </a>
        </div>
        <div>
          <a href="/link1">Website Accessibility </a>
        </div>
        <div>
          <a href="/link1">Gift Cards </a>
        </div>
      </div>
      <div className="footer-link">
        <h6>Our Company</h6>
        <div>
          <a href="/link2"> World of Tiffany </a>
        </div>
        <div>
          <a href="/link2">Sustainability </a>
        </div>
        <div>
          <a href="/link2"> California Privacy </a>
        </div>
        <div>
          <a href="/link2"> Tiffany Careers </a>
        </div>
        <div>
          <a href="/link2"> Website Policies </a>
        </div>
        <div>
          <a href="/link2">Do Not Sell or Share My Personal Information </a>
        </div>
        <div>
          <a href="/link2"> Opt-Out of Targeted Advertising </a>
        </div>
        <div>
          <a href="/link2"></a>
        </div>
      </div>
      <div className="footer-link">
        <h6>Related Tiffany Sites</h6>
        <div>
          <a href="/link2">Wedding & Gift Registry </a>
        </div>
        <div>
          <a href="/link2">Business Accounts </a>
        </div>
        <div>
          <a href="/link2">Tiffany for the Press </a>
        </div>
        <div>
          <a href="/link2">Tiffany Alertline </a>
        </div>
        <div>
          <a href="/link2">Site Index </a>
        </div>
      </div>
      <div className="social-media-icons">
        <div className="footer-sidebar">
          <h5>Latest from Tiffany</h5>
          <p>
            Be the first to know about exciting new designs,
            <br/>special events,
            store openings and much more.
          </p>
          <input className="footer-input" type="text" placeholder="Email" />
          <button className="button">Sing up</button>
        </div>
        <div className="icon" >
          <a href={"https://www.instagram.com"}>
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
            instagram
          </a>
          <a href={"https://www.youtube.com"}>
            {/* <FontAwesomeIcon icon={faYoutube} /> */}
            youtube
          </a>
          <a href={"https://www.twitter.com"}>
            {/* <FontAwesomeIcon icon={faTwitter} /> */}
            twitter
          </a>
          <a href={"https://www.pinterest.com"}>
            {/* <FontAwesomeIcon icon={faPinterest} /> */}
            pinterest
          </a>
        </div>
        
      </div >
      <div className="copyright">© T&CO. 2023 </div>
    </div>
  );
};

export default Footer;
