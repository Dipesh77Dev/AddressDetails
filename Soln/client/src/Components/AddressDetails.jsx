import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const AddressDetails = () => {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    getAddress();
  }, []);

  const getAddress = async () =>{
    const result = await axios.get("http://localhost:3000/addressdetails");
      setAddress(result.data);
  }

  const deleteAddress = async (id) => {
    await axios.delete(`http://localhost:3000/addressdetails/${id}`);
    getAddress();
  }

  return (
    <>
    <h1 style = {{textAlign: "center"}}> Address Details</h1>
      <Table striped bordered hover>
      <thead style = {{textAlign: "center"}}>
        <tr>
          <th>No.</th>
          <th>AddressLine1</th>
          <th>AddressLine2</th>
          <th>LandMark</th>
          <th>Locality</th>
          <th>CityId</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody style = {{textAlign: "center"}}>
        {
          address.map((item, index) =>{
            return(
              <tr>
                <td>{index + 1}</td>
                <td>{item.addressLine1}</td>
                <td>{item.addressLine2}</td>
                <td>{item.landMark}</td>
                <td>{item.locality}</td>
                <td>{item.cityId}</td>
                <td>
                <Link style = {{marginRight: 20}} to = { `/address/${item.id}` }><Button variant="primary">View</Button></Link>
                <Link style = {{marginRight: 20}} to = { `/editaddress/${item.id}` }><Button variant="warning">Edit</Button></Link>
                <Button variant="danger" onClick = {() => deleteAddress(item.id)}>Delete</Button>
                </td>
              </tr>
            )
          })
        }
        </tbody>
        </Table>
        </>
  )
}

export default AddressDetails;