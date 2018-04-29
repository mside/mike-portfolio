import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import MenuModal from '../MenuModal/MenuModal';
import Header from '../Header/Header';
import SiteComponent from '../SiteComponent/SiteComponent';
import Gallery from '../Gallery/Gallery';

//Props have to be passed into function for props to work
const layout = () => (
    <div>
        <Header />
        <Route path="/" exact component={ Home } />
        <Route path="/menu" exact component={ MenuModal } />
        <Route path="/work" exact component={ SiteComponent } />
        <Route path="/work/kalibo" exact component={ SiteComponent } />
        <Route path="/work/mauro" exact component={ SiteComponent } />
        <Route path="/work/video" exact component={ SiteComponent } />
        <Route path="/about" exact component={ SiteComponent } />
        <Route path="/about/resume" exact component={ SiteComponent } />
        <Route path="/gallery" exact component={ Gallery } />
    </div>
);

export default layout;