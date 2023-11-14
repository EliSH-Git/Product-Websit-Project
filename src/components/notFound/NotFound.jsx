import { Link } from "react-router-dom";
import "./NotFound.css";
import React from "react";

function NotFound() {
  return (
    <>
      <p style={{ marginLeft: "20px" }}>
        come back to <Link to="/">Home & Accessories</Link> an.
      </p>
      <div className="not-found-container">
        <h1>404 - Seite nicht gefunden</h1>
        <p>Die von Ihnen gesuchte Seite existiert nicht.</p>
      </div>
      <div className="container">
        <div className="error404page">
          <div className="newcharacter404">
            <div class="chair404"></div>
            <div className="leftshoe404"></div>
            <div className="rightshoe404"></div>
            <div className="legs404"></div>
            <div className="torso404">
              <div className="body404"></div>
              <div className="leftarm404"></div>
              <div className="rightarm404"></div>
              <div className="head404">
                <div className="eyes404"></div>
              </div>
            </div>
            <div className="laptop404"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
