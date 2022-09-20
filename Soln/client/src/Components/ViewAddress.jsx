import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewAddress = () => {
  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    landMark: "",
    locality: "",
    cityId: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3000/addressdetails/${id}`);
    setAddress(res.data);
  };
   return (
    <>
    <div className="container py-4">
      <h1 className="display-4">Address Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">addressLine1: {address.addressLine1}</li>
        <li className="list-group-item">addressLine2: {address.addressLine2}</li>
        <li className="list-group-item">landMark: {address.landMark}</li>
        <li className="list-group-item">locality: {address.locality}</li>
        <li className="list-group-item">cityId: {address.cityId}</li>
      </ul>
    <Link className="btn btn-primary mt-4" to="/">
        Back to Home
      </Link>
      </div>
  </>
  );
};

export default ViewAddress;