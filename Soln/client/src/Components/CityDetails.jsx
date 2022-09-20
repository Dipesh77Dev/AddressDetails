import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const CityDetails = () => {
  const [city, setCity] = useState([]);
  
  useEffect(() => {
    getCity();
  }, []);

  const getCity = async () =>{
    const result = await axios.get("http://localhost:3000/cities") // console.log(result);
      setCity(result.data.reverse()); // setCity(result.data);
  };
  // console.log(res);

  const deleteCity = async (id) => {
    await axios.delete(`http://localhost:3000/cities/${id}`);
    getCity();
  }

   return (
  <>
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
              {/* <tr key = {item._id}> */}
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.shortName}</td>
                <td>{item.pinCode}</td>
                <td>{item.district}</td>
                <td>
                <Link style = {{marginRight: 20}} to = { `/city/${item.id}` }><Button variant="primary">View</Button></Link>
                <Link style = {{marginRight: 20}} to = { `/editCity/${item.id}` }><Button variant="warning">Edit</Button></Link>
                <Button variant="danger" onClick = {() => deleteCity(item.id)}>Delete</Button>
                </td>
              </tr>
              </>
            )
          })
        }

        </tbody>
        </Table>
        {/* <button style = {{marginRight: 50}}> Add City </button> */}
    </>
  )
}

export default CityDetails;

/*
<tr>
     <td>4</td>
     <td>Surat</td>
     <td>ST</td>
     <td>394107</td>
     <td>Surat</td>
 </tr>
 */

/*
const loadCity = async () => {
  const res2 = await axios.get(`http://localhost:3000/cities/${_id}`)
  setCity(res2.data);
}
*/