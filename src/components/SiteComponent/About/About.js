import React from 'react';
import { Link } from 'react-router-dom';
import self from '../../../assets/img/self.jpg';
import mikeCV from '../../../assets/img/michaelSideResume.pdf';

//Props have to be passed into function for props to work
const about = () => (
    <div>
        <div className="contentContainer">
            <div  className="aboutImgContainer">
                <img src={ self } alt="Michael Side Web Development" />
            </div>        
            <div className="aboutTextContainer">
                <h3>Michael Side</h3>
                <h5>Web Development, Icon + Logo Design</h5>
                <p>A brief description possibly -  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                <Link className="resumeC2A" to='/about/resume'>
                    See Resume
                </Link>
                <a className="resumeC2A" href={ mikeCV }>
                    Download Resume
                </a>
            </div>
        </div>
    </div>
);

export default about;