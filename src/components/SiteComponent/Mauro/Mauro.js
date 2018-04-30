import React from 'react';
import { Link } from 'react-router-dom';
import mauroThumb from '../../../assets/img/mauroThumb.jpg';
import arrow from '../../../assets/img/arrow.svg';

//Props have to be passed into function for props to work
const mauro = () => (
    <div className="row workContainer__primary">
        <div className="col-md-6 thumbnail__primary">
            <img src={ mauroThumb } alt="Board Buddies Kickstarter Professional" />
        </div>        
        <div className="col-md-6 workText__primary">
            <h1>Mauro Pinedo VFX Portfolio</h1>
            <h3>Logo Design, SASS, PHP CMS</h3>
            <p>A non-responsive VFX portfolio designed and developed for a student at VanArts. Includes a custom PHP cms to embed video from Vimeo as more work to highlight is created. Built with HTML and SCSS.</p>
        
            <form action="https://www.kickstarter.com/projects/696928813/board-buddies">
                <input type="submit" value="Book Now" class='obj__button' />
            </form>
        </div>
        <div className="arrow__primary">
            <Link to='/work' exact>
                <img src={arrow} alt="page navigation button" />
            </Link>
        </div>
    </div>
);

export default mauro;