import qrimage from "./images/qrcode.png";
import React from "react";

function Qrcode() {
    return (
      <div className="container-fluid d-flex align-items-center justify-content-center" >
        <div className="card p-3" style={{ width: `${18}rem` }}>
          <img className="card-img-top" src={qrimage}  alt="..." />
          <div className="card-body ">
            <h1 className="card-title">Improve your front-end  skills by building projects</h1>
            <p className="card-text">Scan the QR code to visit Frontend  Mentor and take your coding skills to the next level</p>
          </div>
        </div>
            <div className="attribution p-5">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Hsyedjamil1" target="_blank">Syed Jamil Hussain Shah</a>.
            </div>
      </div>
      
    );
  };
  

export default Qrcode;