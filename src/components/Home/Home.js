import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/img/arrow.svg';

const home = () => (
    <div className='row textBlock__primary'>
        <h1>Hello, my name is Michael Side</h1>
        <h1>Thank you for taking interest in my work</h1>
        <h2>You can find my work by clicking the arrow</h2>
        {/* Link to Git, LinkedIn, Email */}
        <h2>michaelside0@gmail.com</h2>
        <div className="arrow__primary">
            <Link to='/work' exact>
                <img src={arrow} alt="page navigation button" />
            </Link>
        </div>
    </div>
);

export default home;