import React from 'react';
import { NavLink } from 'react-router-dom';

//Props have to be passed into function for props to work
const menuModal = () => (
    <ul className="menuList">
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/work" exact>Work</NavLink></li>
        <li><NavLink to="/gallery" exact>Gallery</NavLink></li>
        <li><NavLink to="/about" exact>About</NavLink></li>
    </ul>
);

export default menuModal;