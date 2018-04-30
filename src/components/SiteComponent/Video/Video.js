import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../assets/img/arrow.svg';

//Props have to be passed into function for props to work
const video = () => (
    <div className="row workContainer__primary">
        <div className="col-lg-6 video__primary">
            <iframe title="Board Buddies Rough Draft Video" src="https://player.vimeo.com/video/258032903?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>        
        <div className="col-lg-6 workText__primary">
            <h1>Board Buddies Rough Draft</h1>
            <h3>Adobe Premier, After Effects</h3>
            <p>A rough draft of the video used for the Board Buddies Kickstarter Project. Written by, starring, directed and produced by Michael Side.</p>
        
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

export default video;