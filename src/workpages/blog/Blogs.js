import React from 'react';
import './Blogs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Side from './Side';
import NavMain from './NavMain';
import Main from './Main';
const Blogs = () => {
    return (
        <div className='page d-flex'>
            <Side />
            <div>
                <NavMain />
                <Main />
            </div>
        </div>
    );
};

export default Blogs;