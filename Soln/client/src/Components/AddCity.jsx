import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddCity = () => {
  // let history = useHistory(); - history is not used in new version
  let navigate = useNavigate();

  const [city, setCity] = useState({
    name: "",
    shortName: "",
    pinCode: "",
    district: "",
  });

  const { name, shortName, pinCode, district } = city; // Destrcture

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
              className="form-control form-control-lg form-text"
              placeholder="Enter Your City Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
              required
              maxlength = "10"
            /> 
            {/* Maximum length is 10 characters only */}

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
              maxlength = "10"
              
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
          <button className="btn btn-primary btn-block">Add City</button>
        </form>
      </div>
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