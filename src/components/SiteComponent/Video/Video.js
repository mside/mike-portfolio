import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/img/arrow.svg';

//Props have to be passed into function for props to work
const video = () => (
    <div>
        <div className="contentContainer">
            <div className="siteVideoContainer">
                <iframe className="video" title="Board Buddies Rough Draft Video" src="https://player.vimeo.com/video/258032903?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>        
            <div className="workTextContainer">
                <h3>Board Buddies Rough Draft</h3>
                <h5>Adobe Premier, After Effects</h5>
                <p>A brief description possibly -  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
        <Link to='/work' exact>
            <img src={arrow} className="navArrow" alt="page navigation button" />
        </Link>
    </div>
);

export default video;