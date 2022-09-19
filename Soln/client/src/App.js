import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import AddressDetails from "./Components/AddressDetails.jsx";
import CityDetails from "./Components/CityDetails.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom" ;
import AddCity from './Components/AddCity.jsx';

function App() {
  return (
    <>
      {/* <Router>
      <Header />
        <Routes>
          <Route path = "/" element = {<Home />}></Route>
          <Home />
          <Route path = "/address" element = {<AddressDetails />}></Route>
          <Home />
          <Route path = "/city" element = {<CityDetails />}></Route>
          <Home />
        </Routes>
      </Router> */}

      {/* <Header />
      <Home /> */}
      <AddressDetails />
      <hr />
      <CityDetails />
      <hr />
      <AddCity />
    </>
  );
}

export default App;
