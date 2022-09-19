import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import NotFound from './Components/NotFound.jsx';
import AddressDetails from "./Components/AddressDetails.jsx";
import CityDetails from "./Components/CityDetails.jsx";
import AddCity from './Components/AddCity.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom" ;

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path = "/" element = {<Home />}></Route>
          <Route exact path = "/address" element = {<AddressDetails />}></Route>
          <Route exact path = "/city" element = {<CityDetails />}></Route>
          <Route exact path = "/addCity" element = {<AddCity />}></Route>
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
