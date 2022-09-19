import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../css/Add.css";

const initialState = {
    id : "",
    name : "",
    shortName: "",
    pinCode: "",
    district: ""
}

const AddCity = () => {
    const [city, setCity] = useState(initialState);

    const {id, name, shortName, pinCode, district} = initialState;

    const addData = async(data) => {
        const res = await axios.post("http://localhost:3000/cities", data);
        if(res.status === 200){
            console.log(res.data);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addData(city);
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setCity({ ...city, [name] : value });
    }

  return (
    <>
    <h1 style = {{textAlign: "center"}}> City Details</h1>

    {/* <div style = {{ marginTop: "100px"}}>
        <form 
        style = {{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
        }}
        onSubmit = {handleSubmit}
        />
    </div>
     */}

     <div style = {{ marginTop: "100px"}}>
        <form 
        style = {{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
        }}
        onSubmit = {handleSubmit}
        >

    <label htmlFor = "id"> Id </label>
    <input type = "number" 
    id = "id" 
    name = "id" 
    placeholder = "Enter Id..." 
    onChange = {handleInputChange} 
    value = {id}
    required
    />
    <br />
 
 <label htmlFor = "name"> Name </label>
    <input type = "text" 
    id = "name" 
    name = "name" 
    placeholder = "Enter City Name..." 
    onChange = {handleInputChange} 
    value = {name}
    maxLength={100}
    required
    />
    <br />

    <label htmlFor = "shortName"> ShortName </label>
    <input type = "text" 
    id = "shortName" 
    name = "shortName" 
    placeholder = "Enter City ShortName..." 
    onChange = {handleInputChange} 
    value = {shortName}
    maxLength={50}
    />
    <br />

    <label htmlFor = "pincode"> Pincode </label>
    <input type = "number" 
    id = "pincode" 
    name = "pincode" 
    placeholder = "Enter City PinCode..." 
    onChange = {handleInputChange} 
    value = {pinCode}
    maxLength={50}
    />
    <br />

    <label htmlFor = "district"> District </label>
    <input type = "number" 
    id = "district" 
    name = "district" 
    placeholder = "Enter City District..." 
    onChange = {handleInputChange} 
    value = {district}
    maxLength={100}
    />
    <br />
    
    <input type="submit" value = "ADD" />

    </form>
    </div>

  </>
  )
}

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