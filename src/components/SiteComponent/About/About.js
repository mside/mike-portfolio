import React from 'react';
import { Link } from 'react-router-dom';
import self from '../../../assets/img/self.jpg';
import mikeCV from '../../../assets/img/michaelSideResume.pdf';

//Props have to be passed into function for props to work
const about = () => (
    <div className="row workContainer__primary">
        <div className="col-lg-3 aboutImg__primary">
            <img src={ self } alt="Michael Side Web Development" />
        </div>        
        <div className="col-lg-9 workText__primary">
            <h1>Michael Side</h1>
            <h3>Web Development, Icon + Logo Design</h3>
            <p>Web Developer specializing in front end development with one year worth of experience and education in Web Design and Development. Experienced in all stages of design and development for the creation of dynamic websites. Knowledgeable in numerous programming languages and design programs including HTML5, CSS, Javascript, JQuery, PHP, Adobe Photoshop, and Adobe Illustrator.</p>
            <div className="row">
                <div className="col-4 offset-2">
                    <Link to='/about/resume'>
                        <input type="submit" value="See Resume" class='obj__button obj__button--inline' />
                    </Link>
                </div>
                <div className="col-6">
                    <a href={ mikeCV }>
                        <input type="submit" value="Download Resume" class='obj__button obj__button--inline' />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default about;
