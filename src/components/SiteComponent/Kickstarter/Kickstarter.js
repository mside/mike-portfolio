import React from 'react';
import { Link } from 'react-router-dom';
import kickstarterThumb from '../../../assets/img/kickstarterThumb.jpg';
import arrow from '../../../assets/img/arrow.svg';

//Props have to be passed into function for props to work
const kickstarter = () => (
    <div className="row workContainer__primary">
        <div className="col-md-6 thumbnail__primary">
            <img src={ kickstarterThumb } alt="Board Buddies Kickstarter Professional" />
        </div>        
        <div className="col-md-6 workText__primary">
            <h1>Board Buddies - Kickstarter</h1>
            <h3>Marketing, Logo Design, Video</h3>
            <p>A brief description possibly -  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        
            <form action="https://www.kickstarter.com/projects/696928813/board-buddies">
                <input type="submit" value="Book Now" class='obj__button' />
            </form>
        </div>
        <div className="arrow__primary">
            <Link to='/work/kalibo' exact>
                <img src={arrow} alt="page navigation button" />
            </Link>
        </div>
    </div>
);

export default kickstarter;