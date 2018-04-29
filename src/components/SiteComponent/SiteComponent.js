import React from 'react';
import { Route } from 'react-router-dom';
import Kickstarter from '../SiteComponent/Kickstarter/Kickstarter';
import Kalibo from '../SiteComponent/Kalibo/Kalibo';
import Mauro from '../SiteComponent/Mauro/Mauro';
import Video from '../SiteComponent/Video/Video';
import About from '../SiteComponent/About/About';
import Resume from '../SiteComponent/About/Resume/Resume';

//Props have to be passed into function for props to work
const siteComponent = () => (
    <div>
        <Route path="/work" exact component={ Kickstarter } />
        <Route path="/work/kalibo" exact component={ Kalibo } />
        <Route path="/work/mauro" exact component={ Mauro } />
        <Route path="/work/video" exact component={ Video } />
        <Route path="/about" exact component={ About } />
        <Route path="/about/resume" exact component={ Resume } />
    </div>
);

export default siteComponent;