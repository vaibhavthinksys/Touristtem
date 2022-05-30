import React, { useState } from "react";
import Citytour from "./Citytour";
import "./index.css";

const Header = () => {
  const [open, Setopen] = useState(false)
  const myFunction = () => {
    Setopen(!open)
    
  }
  




  return (
    <div>
      <div className="header">
        <img
          src="https://tripadd-qa-images.s3.us-west-2.amazonaws.com/email-assets/logo.png"
          alt="logo"
          className="imgLogo"
        />
        <div className="topnav" id="myTopnav">
          <a  className="icon">
            <i
              className="fa fa-bars bar"
              style={{ "marginTop": "5px" }}
              onClick={myFunction}
            ></i>
          </a>

          {open && (
            <div>
              <button className="signupbtn1">Sign Up</button>
            </div>
          )}
        </div>

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

export default Header;