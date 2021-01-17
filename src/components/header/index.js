import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.css'

const Header = props =>{
    return(
        <div className='first'>
            <div className='navbar'>
           <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/admin-upload">Upload</NavLink></li>
            </ul>
            </div>
            <div className='links'>
                <a href="www.instagram.com">Instagram</a>
            </div>
        </div>
        
    )
}

export default Header;
