import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';

const Address = () => {
  // get data -
  const [record, setRecord] = useState([]);

  const loadAddress = async () => {
    const result = await axios.get("http://localhost:3000/address");
    setRecord(result.data);
  };

  // add Data - 
  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    landMark: "",
    locality: "",
    cityId: "",
  });

  const {addressLine1, addressLine2, landMark, locality, cityId} = address; // Object Destrcture.

  const onInputChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const addAddressData = async (e) => {
    e.preventDefault();
    // e.target.reset();
    await axios.post("http://localhost:3000/address",address);
    alert('Data Inserted');
      loadAddress();
};

  // edit Data

  // const [random, setRandom] = useState(0);
  const editAddressData = async (id, e) => {
    e.preventDefault();
    // await axios.put(`http://localhost:3000/address/${id}`,);
    //  alert('Data Updated successfully')
    // loadAddress();
};

const [L1, setL1] = useState("");
const [L2, setL2] = useState("");
const [LM, setLM] = useState("");
const [L, setL] = useState("");
const [CI, setCI] = useState("");

// const {L, L1, LM, L, CI } = address1;

const editAddress = (data) => {
    setL1(data.addressLine1);
    setL2(data.addressLine2);
    setLM(data.landMark);
    setL(data.locality);
    setCI(data.cityId);
    console.log(data);
}

  // delete data
  const deleteAddress = async (id) => {
    await axios.delete(`http://localhost:3000/address/${id}`);
    loadAddress();
  };

  // view Data

  useEffect(() => {
    loadAddress();
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
              <form onSubmit={e => editAddressData(e)}> 
                <h5 className="mb-3 text-center">Update Address Records</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-3"
                    name="addressLine1"
                    value={L1}
                    onChange={(e) => setL1(e.target.value)} 
                    placeholder="Enter addressLine1"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-3"
                    name="addressLine2"
                    // value={addressLine2}
                    value = {L2}
                    onChange={(e) => setL2(e.target.value)}
                    placeholder="Enter addressLine2"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-3"
                    name="landMark"
                    // value={landMark}
                    value = {LM}
                    onChange={(e) => setLM(e.target.value)}
                    placeholder="Enter landMark"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-3"
                    name="locality"
                    value={L}
                    onChange={(e) => setL(e.target.value)}
                    placeholder="Enter locality"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="number"
                    class="form-control mb-3"
                    name="cityId"
                    value={CI}
                    onChange={(e) => setCI(e.target.value)}
                    placeholder="Enter cityId"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block mt-2">
                  UPDATE ADDRESS
                </button>
              </form>
            </div>
          </div>
          
          {/* Dispay Address */}
          <div class="col-sm-8">
            <h5 class="text-center  ml-5 mt-3  mb-5">Display Address Records</h5>

            <table class="table table-hover  table-striped table-bordered ml-4">
              <thead>
                <tr>
                  <th>No</th>
                  <th>addressLine1</th>
                  <th>addressLine2</th>
                  <th>landMark</th>
                  <th>locality</th>
                  <th>cityId</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {record.map((name, index) => (
                  <tr>
                    <td> {index + 1}</td>
                    <td>{name.addressLine1}</td>
                    <td>{name.addressLine2}</td>
                    <td>{name.landMark}</td>
                    <td>{name.locality}</td>
                    <td>{name.cityId}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to Delete " + name.locality
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
                            "Do you really want to Edit " + name.locality
                          );
                          if (confirmBox === true) {
                            editAddress(name);
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

      {/* Add Address */}
          <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">ADD Address</h2>
        <form onSubmit={e => addAddressData(e)}>
        {/* <form> */}
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your addressLine1"
              name="addressLine1"
              value={addressLine1}
              onChange={e => onInputChange(e)}
              required
              maxLength = "10"
            /> 
        
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your addressLine2"
              name="addressLine2"
              value={addressLine2}
              onChange={e => onInputChange(e)}
              required
              maxLength = "10"     
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your landMark"
              name="landMark"
              value={landMark}
              onChange={e => onInputChange(e)}
              maxLength = "10"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your locality"
              name="locality"
              value={locality}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your cityId"
              name="cityId"
              value={cityId}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Address</button>
        </form>
      </div>
    </div>
    <hr />
    <br />

    </>
  );
};

export default Address;


  /*
   search 
  const [search, setSearch] = useState("");
  const { id } = useParams();
  const searchRecords = () =>
  {
      alert(search)
      axios.get(`http://localhost:3000/address/${id}`)
      .then(response => {
        setRecord(response.data);
      });
  }
  */

  /*
  After Display Record
 <div class="input-group mb-4 mt-3">
              <div class="form-outline">
                <input
                  type="text"
                  id="form1"
                  onChange={(e) => setSearch(e.target.value)}
                  class="form-control"
                  placeholder="Search Employee Here"
                  style={{ backgroundColor: "#ececec" }}
                />
              </div>
              <button
                type="button"
                onClick={searchRecords}
                class="btn btn-success"
              >
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
  */

  /* 
    For displaying single
    <Button
                       style = {{marginRight: 5}}
                        variant="warning"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to View " + name.locality
                          );
                          if (confirmBox === true) {
                            deleteAddress(name.id);
                          }
                        }} 
                      > View
                      </Button> */