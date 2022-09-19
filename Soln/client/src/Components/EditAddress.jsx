import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditAddress = () => {
  // let history = useHistory(); - history is not used in new version
  let navigate = useNavigate();
  const {id} = useParams();

  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    landMark: "",
    locality: "",
    cityId: "",
  });

  const { addressLine1, addressLine2, landMark, locality, cityId } = address;

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setAddress({...address, [e.target.name] : e.target.value});
  }

  const onSubmit = async(e) => {
     e.preventDefault(); 
     await axios.put(`http://localhost:3000/addressdetails/${id}`, address);
    navigate("/address", {replace : true});
  }
  
  const loadAddress = async () => {
    const result = await axios.get(`http://localhost:3000/addressdetails/${id}`);
    setAddress(result.data);
  };

  useEffect(() => {
    loadAddress();
  }, []);

  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}> ADD CITY </h1> */}

      <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">ADD ADDRESS</h2>
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
          <button className="btn btn-primary btn-block">Update Address</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default EditAddress;