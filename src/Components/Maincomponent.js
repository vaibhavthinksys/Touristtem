import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./index.css";
import "react-calendar/dist/Calendar.css";

const Maincomponent = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="middleComponent">
      <div className="middlePart">
        <div className="startingTime">
          <div>Select a Starting Time</div>

        </div>
        <div className="combined">
          <div className="totalCompoPart">
            <div className="calender">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
          <div className="xyz">
            <div className="availableTime">Available Times:
            </div>
            <div className="zyx">
              <div class="grid-container">
                <div class="grid-item1">8:00AM</div>
                <div class="grid-item1"> 8:30AM</div>
                <div class="grid-item1"> 9:00AM</div>
                <div class="grid-item1"> 9:30AM</div>
                <div class="grid-item1"> 10:00AM</div>
                <div class="grid-item1"> 10:30AM</div>
                <div class="grid-item1">11:00AM</div>
                <div class="grid-item1">11:30AM</div>
                <div class="grid-item1">12:00PM</div>
                <div class="grid-item1">1:00PM</div>
                <div class="grid-item1">1:30PM</div>
                <div class="grid-item1">2:00PM</div>
                <div class="grid-item1">2:30PM</div>
                <div class="grid-item1">3:00PM</div>
                <div class="grid-item1">3:30PM</div>
                <div class="grid-item1">4:00PM</div>
                <div class="grid-item1">4:30PM</div>
                <div class="grid-item1">5:00PM</div>
              </div>
            </div>
            {/* {/ <div>Available Times</div> /} */}
          </div>
        </div>


        <div>
          <div className="pickupAddress">Pickup Address(Optional)</div>
          <div className="inputField">
          <input type="text" placeholder="add"></input>
          </div>
          <div className="underlineInputField">
            We need the address of your accomodation in order to arrange pickup
          </div>
        </div>
        <div className="foots">
          <div className="mobileAndEmail">
            <div className="mobilePhone">Your mobile phone</div>
            <div className="inputField1">
              <input type="text" placeholder="add2"></input>
            </div>

          </div>

          <div className="mobileAndEmail">
            <div className="mobilePhone1">Your email</div>

            <div className="inputfield12"><input type="text" placeholder="add3"></input></div>

          </div>
        </div>

        <div className="footer">
          <div className="saveBtn">
            <button className="btn">Save & Book</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Maincomponent;