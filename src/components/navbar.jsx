 import React from "react";
 import { Link } from 'react-router-dom';
 import { AiOutlineShopping } from "react-icons/ai";
 import './navbar.css';

 

 export const Navbar = () => {
    return (
<div className="navbar">

    <div className="links">
    <h1 className="Logo"> ΌMΟRFΟ  </h1>

        <Link to="/"> Shop </Link>
        <Link to="/cart"> <AiOutlineShopping size={32} /> </Link>
       
    </div>
    
</div>);
 };