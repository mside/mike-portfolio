import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

class header extends Component {
    render() {
        return (
            <header className="headerContainer">
                <Link to="/" exact>
                    <img src={logo} className="logo" alt="michael side web developer logo" />
                </Link>
                <button className="menuButton"><Link to="/menu" exact>Menu</Link></button>
            </header>
        );
    }
}

export default header;
