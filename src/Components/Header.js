import React from "react";
import Citytour from "./Citytour";
import "./index.css";

const header = () => {
  return (
    <div>
      <div className="header">
        <img
          src="https://tripadd-qa-images.s3.us-west-2.amazonaws.com/email-assets/logo.png"
          alt="logo"
          className="imgLogo"
        />
        <button className="signupbtn">Sign Up</button>
        
      </div>

      <div className="abcd">
        <hr className="hrline" />
        <div className="touristHeading"><h3>Schedule Your Tours And Activities</h3></div>
        <div className="mainCityComponent">
          <Citytour />
        </div>
      </div>
    </div>
  );
};

export default header;