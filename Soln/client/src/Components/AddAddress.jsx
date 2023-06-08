import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddAddress = () => {
  // let history = useHistory(); - history is not used in new version
  let navigate = useNavigate();

  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    landMark: "",
    locality: "",
    cityId: "",
  });

  const { addressLine1, addressLine2, landMark, locality, cityId } = address;

  const onInputChange = (e) => {
    console.log(e.target.value);
    // setCity({[e.target.name] : e.target.value});
    setAddress({...address, [e.target.name] : e.target.value});
  }

  const onSubmit = async(e) => {
     e.preventDefault(); // if we not give this it will show what we type 
     await axios.post("http://localhost:3003/addressdetails", address);
    //  <Navigate to = "/city" />
    navigate("/address", {replace : true});
  }
  //   navigate("/addressdetails", {replace : true});
  
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}> ADD CITY </h1> */}

      <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">ADD CITY</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Address Line 1"
              name="addressLine1"
              value={addressLine1}
              onChange={e => onInputChange(e)}
              required
              maxLength = "100"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Address Line 2"
              name="addressLine2"
              value={addressLine2}
              onChange={e => onInputChange(e)}
              required
              maxLength = "50"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Landmark"
              name="landMark"
              value={landMark}
              onChange={e => onInputChange(e)}
              maxLength = "100"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Locality"
              name="locality"
              value={locality}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your City Id"
              name="cityId"
              value={cityId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Address</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddAddress;