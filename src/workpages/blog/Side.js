import React from 'react';
import './Blogs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
const Side = () => {
    return (      
           <Navbar     
    className="ms-1 sidebar"
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
      Reactstrap
    </NavbarBrand>
  </Navbar>
    );
};

export default Side;