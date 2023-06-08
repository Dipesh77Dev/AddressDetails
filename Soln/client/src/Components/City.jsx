import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

const City = () => {
  // get data -
  const [record, setRecord] = useState([]);

  const loadCity = async () => {
    const result = await axios.get("http://localhost:3003/city");
    setRecord(result.data);
  };

  // add Data - 
  const [city, setCity] = useState({
    name: "",
    shortName: "",
    pinCode: "",
    district: "",
  });

  const {name, shortName, pinCode, district} = city; // Object Destrcture.

  const onInputChange = (e) => {
    setCity({ ...city, [e.target.name]: e.target.value });
  };

  const addCityData = async (e) => {
    e.preventDefault();
    e.target.reset();
    await axios.post("http://localhost:3003/city",city);
    alert('Data Inserted');
     
    loadCity();
};

  // edit Data
  const editAddressData = async (e) => {
     
    loadCity();
};

const editAddress = async (e) => {

}

  // delete data
  const deleteAddress = async (id) => {
    await axios.delete(`http://localhost:3000/address/${id}`);
    loadCity();
  };

  // view Data

  useEffect(() => {
    loadCity();
  }, []);

  return (
    <>

      {/* Edit ADDRESS */}
      <div class="container-fluid">
        <div class="row mt-3">
        <div class="col-sm-4">
            <div
              className="box p-3 mb-3 mt-5"
              style={{ border: "1px solid #d0d0d0" }}
            >
              <form onSubmit={editAddressData}> 
                <h5 className="mb-3 text-center">Update Address Records</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-3"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter City name"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-3"
                    name="shortName"
                    value={shortName}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter City Short Name"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-3"
                    name="pinCode"
                    value={pinCode}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter City Pin Code"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-3"
                    name="district"
                    value={district}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter City District"
                    required
                  />
                </div>

                <button type="submit" class="btn btn-primary btn-block mt-2">
                  UPDATE City
                </button>
              </form>
            </div>
          </div>
          
          {/* Dispay City */}
          <div class="col-sm-8">
            <h5 class="text-center  ml-5 mt-3  mb-5">Display City Records</h5>

            <table class="table table-hover  table-striped table-bordered ml-4">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Short Name</th>
                  <th>Pin Code</th>
                  <th>District</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {record.map((name, index) => (
                  <tr>
                    <td> {index + 1}</td>
                    <td>{name.name}</td>
                    <td>{name.shortName}</td>
                    <td>{name.pinCode}</td>
                    <td>{name.district}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to delete " + name.name
                          );
                          if (confirmBox === true) {
                            deleteAddress(name.id);
                          }
                        }} 
                      > Delete
                      </Button>

                      <Button
                      style = {{marginRight: 20}}
                        variant="warning"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to Edit " + name.name
                          );
                          if (confirmBox === true) {
                            editAddress(name.id);
                          }
                        }} 
                      > Edit
                      </Button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr />
      <br />

      {/* Add City */}
          <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">ADD City</h2>
        <form onSubmit={e => addCityData(e)}>
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
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your City district"
              name="district"
              value={district}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add City</button>
        </form>
      </div>
    </div>
    <hr />
    <br />

    </>
  );
};

export default City;

  