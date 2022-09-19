import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const AddressDetails = () => {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    getAddress();
  }, []);

  const getAddress = async () =>{
    const res = await axios.get("http://localhost:3000/addressdetails");
    if(res.status === 200){
      setAddress(res.data);
    }
  }

  return (
    <>
    <h1 style = {{textAlign: "center"}}> Address Details</h1>
      <Table striped bordered hover>
      <thead style = {{textAlign: "center"}}>
        <tr>
          <th>id</th>
          <th>AddressLine1</th>
          <th>AddressLine2</th>
          <th>LandMark</th>
          <th>Locality</th>
          <th>CityId</th>
        </tr>
      </thead>
      <tbody style = {{textAlign: "center"}}>
        {
          address.map((item) =>{
            return(
              <tr key = {item._id}>
                <td>{item.id}</td>
                <td>{item.addressLine1}</td>
                <td>{item.addressLine2}</td>
                <td>{item.landMark}</td>
                <td>{item.locality}</td>
                <td>{item.cityId}</td>
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