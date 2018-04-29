import React, { Component } from 'react';
import arrow from '../../assets/img/arrow.svg';

class pageDown extends Component {
    render() {
        return (
            <div>
                <a href=''>
                    <img src={arrow} className="navArrow" alt="page navigation button" />
                </a>
            </div>
        );
    }
}

export default pageDown;