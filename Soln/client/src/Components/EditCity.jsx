import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
// import jsonData from "./data.json";

const EditCity = () => {
  // let history = useHistory(); - history is not used
  let navigate = useNavigate();
  const {id} = useParams();
//   alert(id);

  const [city, setCity] = useState({
    name: "",
    shortName: "",
    pinCode: "",
    district: "",
  });

  const { name, shortName, pinCode, district } = city; 

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setCity({...city, [e.target.name] : e.target.value});
  }

  const onSubmit = async(e) => {
     e.preventDefault();
     await axios.put(`http://localhost:3000/cities/${id}`, city);
    navigate("/city", {replace : true});
  }

  const loadCity = async () => {
    // const result = await axios.get("http://localhost:3000/cities/" + id);
    const result = await axios.get(`http://localhost:3000/cities/${id}`);
    setCity(result.data);
  };

  useEffect(() => {
    loadCity();
  }, []);

  return (
    <>
      <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">UPDATE CITY</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your City Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
              required
              maxLength = "100"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your City Short Name"
              name="shortName"
              value={shortName}
              onChange={e => onInputChange(e)}
              required
              maxLength = "50"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your City Pin Code"
              name="pinCode"
              value={pinCode}
              onChange={e => onInputChange(e)}
              maxLength = "100"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your City District"
              name="district"
              value={district}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update City</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default EditCity;

/*
<div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your City Id"
              name="id"
              value={id}
              maxlength = "5"
              onChange={e => onInputChange(e)}
            />
          </div>
*/

