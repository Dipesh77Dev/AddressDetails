import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewCity = () => {
  const [city, setCity] = useState({
    name: "",
    shortName: "",
    pinCode: "",
    district: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/cities/${id}`);
    setCity(res.data);
  };
   return (
    <>
    <div className="container py-4">
      <h1 className="display-4">City Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {city.name}</li>
        <li className="list-group-item">shortName: {city.shortName}</li>
        <li className="list-group-item">pinCode: {city.pinCode}</li>
        <li className="list-group-item">district: {city.district}</li>
      </ul>
    
    <Link className="btn btn-primary mt-4" to="/">
        Back to Home
      </Link>
      </div>
  </>
  );
};

export default ViewCity;