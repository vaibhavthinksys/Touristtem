import React from "react";
import { useState,useEffect } from "react";
import Calendar from "react-calendar";
import "./index.css";
import "react-calendar/dist/Calendar.css";

const Maincomponent = () => {
  const initialValues = { phone:"", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [value, onChange] = useState(new Date());
  const [color,setColor]=useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors.length,"formErrors");
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    console.log(values)
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.phone) {
      errors.phone = "Phone is required!";
    }else if (values.phone.length!=10){
      errors.phone = "10 digit Phone number  is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
   
    return errors;
  };

  
  const arr = ["8:00AM", "8:30AM", "9:00AM", "9:30AM", "10:00AM", "10:30AM", "11:00AM", "11:30AM", "12:00PM", "12:30PM", "1:00PM",
    "1:30PM", "2:00PM", "2:30PM", "3:00PM", "3:30PM", "4:00PM", "4:30PM", "5:00PM"]

  
  const changeColor = (ele) => {
    setColor(ele);
  };

  

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
              <div className="grid-container">

                {arr.map((ele,index) => {
                  return (
                    <div className="grid-item1"
                      style={{ background: ele === color ? "blue" : "white",cursor:"pointer"}}
                      onClick={() => changeColor(ele)}
                      key={index}
                    >{ele}</div>)
                })}
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
              <input type="text" placeholder="Phone Number" name='phone' value={formValues.phone} onChange={handleChange}></input>
              <p style={{color:'red'}}>{formErrors.phone}</p>
            </div>

          </div>
          
          <div className="mobileAndEmail">
            <div className="mobilePhone1" >Your email</div>

            <div className="inputfield12">
              <input type="text" placeholder="Email" name='email' onChange={handleChange} value={formValues.email}  ></input>
              <p style={{color:'red'}}>{formErrors.email}</p>
            </div>

          </div>
        </div>

        <div className="footer">
          <div className="saveBtn">
            <button className="btn" onClick={handleSubmit}>Save & Book</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Maincomponent;