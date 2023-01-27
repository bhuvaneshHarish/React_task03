import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Header = () => {
  return (
    <div>
        <div className='container'>
            <h2 className='header-Name'>CRUD OPERATION</h2>
        <div className='bar'>  
            <li><Link to={"/"}>login</Link></li>
            <li><Link to={"/login"}>Home</Link></li>
            <li><Link to={"/profile"}>Profile</Link></li>
        </div>
        </div>
    </div> 
  )
}

export default Header