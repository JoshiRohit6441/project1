import React from 'react';
import { NavLink } from 'react-router-dom';

let Navbar = () => {
    return (
        <>
            <div className='navbar-main'>
                <NavLink className="brandname" to="/">JoshiRohit</NavLink>
                <div>
                    <NavLink className="navlink" to="/">Home</NavLink>
                    <NavLink className="navlink" to="/about">About</NavLink>
                    <NavLink className="navlink" to="/contact">Contact</NavLink>
                    <NavLink className="navlink" to="/services">Services</NavLink>
                </div>
            </div>
        </>
    )
}
export default Navbar;