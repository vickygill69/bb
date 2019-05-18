import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import favicon from "../images/favicon.png";

const Navigationbar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">
                <img
                    src={favicon}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                &nbsp;&nbsp;Sitbyte</Navbar.Brand>
            <Nav className="mr-auto collapse navbar-collapse justify-content-end">
                <Nav.Link href="#f">Features</Nav.Link>
                <Nav.Link href="#p">Precios</Nav.Link>
                <Nav.Link href="#qh">Que hacemos</Nav.Link>
                <Nav.Link href="#qnh">Que no hacemos</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default Navigationbar;