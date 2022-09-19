import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import NotFound from './Components/NotFound.jsx';

import CityDetails from "./Components/CityDetails.jsx";
import AddCity from './Components/AddCity.jsx';
import EditCity from './Components/EditCity.jsx';
import ViewCity from './Components/ViewCity.jsx';

import AddressDetails from "./Components/AddressDetails.jsx";
import AddAddress from './Components/AddAddress.jsx';
import EditAddress from './Components/EditAddress.jsx';
import ViewAddress from './Components/ViewAddress.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom" ;

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path = "/" element = {<Home />}></Route>
          
          {/* City */}
          <Route exact path = "/addCity" element = {<AddCity />}></Route>
          <Route exact path = "/city" element = {<CityDetails />}></Route>
          <Route exact path = "/city/:id" element = {<ViewCity />}></Route> 
          <Route exact path = "/editCity/:id" element = {<EditCity />}></Route> {/* Dynamic Routing */}

          {/* Address */}
          <Route exact path = "/addAddress" element = {<AddAddress />}></Route>
          <Route exact path = "/address" element = {<AddressDetails />}></Route>
          <Route exact path = "/address/:id" element = {<ViewAddress />}></Route> 
          <Route exact path = "/editAddress/:id" element = {<EditAddress />}></Route>
          <Route path = "*" element = {<NotFound />} />
        </Routes>
      </Router>

      {/* <Header />
      <Home /> }
      <AddressDetails />
      <hr />
      <CityDetails />
      <hr />
      <AddCity />
      */}
    </>
  );
}

export default App;
