import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    e.target.reset();
    await axios.post("http://localhost:3000/address",address);
    alert('Data Inserted');
     
    loadAddress();
};
  useEffect(() => {
    loadAddress();
  }, []);

  // delete data
  const deleteAddress = async (id) => {
    await axios.delete(`http://localhost:3000/address/${id}`);
    loadAddress();
  };

  return (
    <>
      <div class="container">
        <div class="row mt-3">
          <div class="col-sm-4">
            <div
              className="box p-3 mb-3 mt-5"
              style={{ border: "1px solid #d0d0d0" }}
            >
              <form onSubmit={addAddressData}> 
                <h5 className="mb-3 text-center">Insert Address Records</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-3"
                    name="addressLine1"
                    value={addressLine1}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter addressLine1"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-3"
                    name="addressLine2"
                    value={addressLine2}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter addressLine2"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-3"
                    name="landMark"
                    value={landMark}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter landMark"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control mb-3"
                    name="locality"
                    value={locality}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter locality"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="number"
                    class="form-control mb-3"
                    name="cityId"
                    value={cityId}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter cityId"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block mt-2">
                  ADD ADDRESS
                </button>
              </form>
            </div>
          </div>
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
                      <a
                        className="text-danger mr-2"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to delete " + name.locality
                          );
                          if (confirmBox === true) {
                            deleteAddress(name.id);
                          }
                        }}
                      >
                        {" "}
                        <i
                          class="far fa-trash-alt"
                          style={{ fontSize: "18px", marginRight: "5px" }}
                        ></i>{" "}
                      </a>

                      {/* <Link
                        class=" mr-2"
                        to={`/EditEmployee/editID/${name.id}`}
                      >
                        <i class="fa fa-edit" aria-hidden="true"></i>
                      </Link> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
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