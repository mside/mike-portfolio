import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

class header extends Component {
    render() {
        return (
            <header className="row">
                <div className='col-4'>
                    <Link to="/" exact>
                        <img src={logo} className="logo__primary" alt="michael side web developer logo" />
                    </Link>
                </div>
                <div className='menu__container col-4 offset-4'>
                    <button className="menu__button">
                        <Link to="/menu" exact>Menu</Link>
                    </button>
                </div>
            </header>
        );
    }
}

export default header;
