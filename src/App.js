import React, { Component } from 'react';
import './App.css';
import Navigationbar from "./components/Navigationbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Precios from "./components/Precios";
import { Col, Nav, Navbar, NavLink, TabPane, Row, Form,FormControl,InputGroup } from 'react-bootstrap';

class Forme extends React.Component {
render() {
return (
  <div>
  <Navigationbar/>
  <Header/>
  <br/><hr/>
  <Features/>
  <Precios/>
  </div>
)
}
}

export default Forme;
