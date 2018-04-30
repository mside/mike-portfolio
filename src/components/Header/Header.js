import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';

class header extends Component {
    render() {
        return (
            <header className="row">
                <div className='col-md-4 col-sm-6 col-xs-6'>
                    <Link to="/" exact>
                        <img src={logo} className="logo__primary" alt="michael side web developer logo" />
                    </Link>
                </div>
                <div className='menu__container col-md-2 offset-md-6 col-sm-6 col-xs-6'>
                    <button className="menu__button">
                        <Link to="/menu" exact>Menu</Link>
                    </button>
                </div>
            </header>
        );
    }
}

export default header;
