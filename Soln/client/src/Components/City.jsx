import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams } from "react-router-dom";

const City = () => {
    
// City Details -
const [city, setCity] = useState([]);
  
useEffect(() => {
    getCity();
    // ViewCity();
    // EditCity();
}, []);

const getCity = async () =>{
    const result = await axios.get("http://localhost:3000/city") // console.log(result);
    setCity(result.data); 
};

const deleteCity = async (id) => {
    await axios.delete(`http://localhost:3000/city/${id}`);
    getCity();
}

// Add City 
const [addCity, setAddCity] = useState({
    name: "",
    shortName: "",
    pinCode: "",
    district: "",
  });

  const { name, shortName, pinCode, district } = city; 

  const onInputChange = (e) => {
    console.log(e.target.value);
    setAddCity({...addCity, [e.target.name] : e.target.value});
  }

  const onSubmit = async(e) => {
     e.preventDefault(); 
     await axios.post("http://localhost:3000/city", addCity);
     getCity();
  }

  const addCity1 = () => {
    getCity();
}

// Edit City
// let navigate = useNavigate();
const {id} = useParams();

const [editCity, setEditCity] = useState({
    name: "",
    shortName: "",
    pinCode: "",
    district: "",
});
// const { name, shortName, pinCode, district } = city; 

const onInputChange2 = (e) => {
    setEditCity({...editCity, [e.target.name] : e.target.value});
  }

  const onSubmit2 = async(e) => {
     e.preventDefault();
     await axios.put(`http://localhost:3000/city/${id}`, editCity);
     getCity();
  }

//   const EditCity = () => {
//     getCity();
// }

const EditCity = async () => {
    const result = await axios.get(`http://localhost:3000/city/${id}`);
    setEditCity(result.data);
    getCity();
  };

// View City 
const [viewCity, setViewCity] = useState({
    name: "",
    shortName: "",
    pinCode: "",
    district: "",
});

// const { id } = useParams();

const ViewCity = async () => {
    const res = await axios.get(`http://localhost:3000/city/${id}`);
    console.log(res);
    setViewCity(res.data);
  };

const [search,setSearch] =useState('');

const searchRecords = async () =>
    {
        alert(search)
        await axios.get(`http://localhost:3000/city/${search}`)
        .then(response => {
        setCity(response.data);
        });
    }

  return (
    <>
        {/* City Details */}
        <h1 style = {{textAlign: "center"}}> City Details</h1>
      <Table striped bordered hover>
      <thead style = {{textAlign: "center"}}>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>ShortName</th>
          <th>PinCode</th>
          <th>District</th>
          <th>Action</th>
        </tr>
      </thead>
      
      <tbody style = {{textAlign: "center"}}>
        {
          city.map((item, index) =>{
            return(
              <>
              {/* <tr key = {item.id}> */}
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.shortName}</td>
                <td>{item.pinCode}</td>
                <td>{item.district}</td>
                <td>
                <Button style = {{marginRight: 20}} variant="primary" onClick = {() => ViewCity(item.id)}>VIEW</Button>
                <Button style = {{marginRight: 20}} variant="warning" onClick = {() => EditCity(item.id)}>EDIT</Button>
                <Button style = {{marginRight: 20}} variant="danger" onClick = {() => deleteCity(item.id)}>Delete</Button>
                </td>
              </tr>
              </>
            )
          })
        }

        </tbody>
        </Table>
        <hr /><br />

        <input type="text" id="form1" onChange={(e)=>setSearch(e.target.value)} class="form-control" placeholder="Search Employee Here" style={{backgroundColor:"#ececec"}}/>
        <button type="button" onClick={searchRecords}  class="btn btn-success">
            <i class="fa fa-search" aria-hidden="true"></i>
        </button>

        {/* Add City Form  */}
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">ADD CITY</h2>
        <form onSubmit={e => onSubmit(e)}>
        {/* <form> */}
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your City Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
              required
              maxLength = "10"
            //   autoComplete="on"
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
              maxLength = "10"     
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
              maxLength = "10"
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
          <button className="btn btn-primary btn-block" onClick={addCity1}>Add City</button>
        </form>
      </div>
    </div>
    <hr />
    <br />


{/* Edit City */}
<div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">UPDATE CITY</h2>
        <form onSubmit={e => onSubmit2(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your City Name"
              name="name"
              value={name}
              onChange={e => onInputChange2(e)}
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
              onChange={e => onInputChange2(e)}
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
              onChange={e => onInputChange2(e)}
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
              onChange={e => onInputChange2(e)}
            />
          </div>
          <button className="btn btn-warning btn-block" >Update City</button>
        </form>
      </div>
    </div>
    <hr />
    <br />

        {/* View City  */}
        <div className="container py-4">
      <h1 className="display-4">City Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {viewCity.name}</li>
        <li className="list-group-item">shortName: {viewCity.shortName}</li>
        <li className="list-group-item">pinCode: {viewCity.pinCode}</li>
        <li className="list-group-item">district: {viewCity.district}</li>
      </ul>
    
    <Link className="btn btn-primary mt-4" to="/">
        Back to Home
      </Link>
      </div>

    </>
  )
}

export default City;