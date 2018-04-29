import React from 'react';
import { Link } from 'react-router-dom';
import kaliboThumb from '../../../assets/img/kaliboThumb.jpg';
import arrow from '../../../assets/img/arrow.svg';

//Props have to be passed into function for props to work
const kalibo = () => (
    <div>
        <div className="contentContainer">
            <div  className="siteThumbnail">
                <img src={ kaliboThumb } alt="Kalibo Music Portfolio Site" />
            </div>        
            <div className="workTextContainer">
                <h3>Kalibo DJ Site</h3>
                <h5>Logo Design, PHP CMS</h5>
                <p>A brief description possibly -  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <a className="c2A" href='kalibo.michaelside.com'>
            Check It Out
        </a>
        <Link to='/work/mauro' exact>
            <img src={arrow} className="navArrow" alt="page navigation button" />
        </Link>
    </div>
);

export default kalibo;