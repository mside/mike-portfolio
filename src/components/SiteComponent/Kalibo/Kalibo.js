import React from 'react';
import { Link } from 'react-router-dom';
import kaliboThumb from '../../../assets/img/kaliboThumb.jpg';
import arrow from '../../../assets/img/arrow.svg';

//Props have to be passed into function for props to work
const kalibo = () => (
    <div className="row workContainer__primary">
        <div className="col-md-6 thumbnail__primary">
            <img src={ kaliboThumb } alt="Board Buddies Kickstarter Professional" />
        </div>        
        <div className="col-md-6 workText__primary">
        <h1>Kalibo DJ Portfolio</h1>
        <h3>Bootstrap, Logo Design, SASS</h3>
        <p>A DJ portfolio and event news website. Designed and developed singlehandedly as a term project for VanArts. Includes a custom PHP CMS for current events, with a backend login.</p>
        
            <form action="https://www.kickstarter.com/projects/696928813/board-buddies">
                <input type="submit" value="Book Now" class='obj__button' />
            </form>
        </div>
        <div className="arrow__primary">
            <Link to='/work/video' exact>
                <img src={arrow} alt="page navigation button" />
            </Link>
        </div>
    </div>
);

export default kalibo;