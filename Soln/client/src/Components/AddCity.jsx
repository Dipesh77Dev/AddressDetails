import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import "../css/index.css";
// import jsonData from "./data.json";

const AddCity = () => {
  // let history = useHistory(); - history is not used
  let navigate = useNavigate();

  const [city, setCity] = useState({
    id: "",
    name: "",
    shortName: "",
    pinCode: "",
    district: "",
  });

  const { id, name, shortName, pinCode, district } = city; // Destrcture

  const onInputChange = (e) => {
    console.log(e.target.value);
    // setCity({[e.target.name] : e.target.value});
    setCity({...city, [e.target.name] : e.target.value});
  }

  const onSubmit = async(e) => {
     e.preventDefault(); // if we not give this it will show what we type 
     await axios.post("http://localhost:3000/cities", city);
    //  <Navigate to = "/city" />
    navigate("/city", {replace : true});
  }

  // const addData = async (data) => {
  //   const res = await axios.post("http://localhost:3000/cities", data);
  //   if (res.status === 200) {
  //     console.log(res.data);
  //   }
  // };

  return (
    <>
      <h1 style={{ textAlign: "center" }}> City Details</h1>

      <div style={{ marginTop: "20px" }}>
        <form onSubmit={e => onSubmit(e)}
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
        >
          {/* <label htmlFor = "id"> Id </label> */}
          <input
            type="number"
            name="id"
            placeholder="Enter Id..."
            onChange={e => onInputChange(e)}
            value={id}
            required
          />
          <br />

          {/* <label htmlFor = "name"> Name </label> */}
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter City Name..."
            onChange={e => onInputChange(e)}
            value={name}
            maxLength={100}
            required
          />
          <br />

          {/* <label htmlFor="shortName"> ShortName </label> */}
          <input
            type="text"
            id="shortName"
            name="shortName"
            placeholder="Enter City ShortName..."
            onChange={e => onInputChange(e)}
            value={shortName}
            maxLength={50}
          />
          <br />

          {/* <label htmlFor="pincode"> Pincode </label> */}
          <input
            type="number"
            id="pinCode"
            name="pinCode"
            placeholder="Enter City PinCode..."
            onChange={e => onInputChange(e)}
            value={pinCode}
            maxLength={50}
          />
          <br />

          {/* <label htmlFor="district"> District </label> */}
          <input
            type="text"
            id="district"
            name="district"
            placeholder="Enter City District..."
            onChange={e => onInputChange(e)}
            value={district}
            maxLength={100}
          />
          <br />

          {/* <input type="submit" value="ADD" /> */}
          <div className="d-grid gap-2" style = {{marginTop:20}}>
        <Button variant="success" size="lg">
         ADD CITY
        </Button>
        </div>

        </form>
      </div>
    </>
  );
};

export default AddCity;

/*
<Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
*/
