import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const CityDetails = () => {
  const [city, setCity] = useState([]);

  useEffect(() => {
    getCity();
  }, []);

  const getCity = async () =>{
    const res = await axios.get("http://localhost:3000/cities");
    // console.log(res, res.data,res.status);
    if(res.status === 200){
      setCity(res.data);
      // console.log("Raj", city);
    }
  }
  // console.log(res);

  return (
  <>
    <h1 style = {{textAlign: "center"}}> City Details</h1>
      <Table striped bordered hover>
      <thead style = {{textAlign: "center"}}>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>ShortName</th>
          <th>PinCode</th>
          <th>District</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody style = {{textAlign: "center"}}>
        {/* <tr>
          <td>4</td>
          <td>Surat</td>
          <td>ST</td>
          <td>394107</td>
          <td>Surat</td>
        </tr> */}
        {
          city.map((item) =>{
            return(
              <tr key = {item._id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.shortName}</td>
                <td>{item.pinCode}</td>
                <td>{item.district}</td>
                <td>
                <Button variant="primary">Edit</Button>
                <Button variant="warning">Delete</Button>
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

export default CityDetails;