import React from 'react';
// import { NavLink } from 'react-router-dom';
import kaliboLogo from '../../assets/img/gallery/kalibo-logo.png';
import mauroLogo from '../../assets/img/gallery/mauro-logo.png';
import bbLogo from '../../assets/img/gallery/bb-logo.png';

//Props have to be passed into function for props to work
const gallery = () => (
    <div>
        <div className="galleryContainer">
            <div className="galleryImg">
                <img className="bbLogo" src={ bbLogo } alt="board buddies logo mike side" />
            </div>
            <div className="galleryImg">
                <img className="mauroLogo" src={ mauroLogo } alt="mauro vfx logo mike side" />
            </div>
            <div className="galleryImg">
                <img className="kaliboLogo" src={ kaliboLogo } alt="kalibo dj logo mike side" />
            </div>
        </div>
    </div>
);

export default gallery;