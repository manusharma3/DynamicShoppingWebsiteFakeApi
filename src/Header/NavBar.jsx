import React from 'react'
import "./NavBar.css"
import {  Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
const NavBar = () => {
    return (<>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/viewpost">Post</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <Outlet/>
    </>
    )
}

export default NavBar