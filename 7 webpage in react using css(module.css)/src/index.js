import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './style.css';
import Navbar from './components/NavbarComponent.js';
import Banner from './components/BannerComponent.js';
import Marquee from './components/MarqueeComponent.js';
import ContentComponent from './components/ContentComponent.js';
import BoxComponent from './components/BoxComponent.js';
import AboutComponent from './components/AboutComponent.js';
import ContactComponent from './components/ContactComponent.js';
import FooterComponent from './components/FooterComponent.js';
import Header from './components/HeaderComponent/HeaderComponent.js';

function Container(){
    return (<>
        <Header/>
        <Navbar/>
        <Banner/>
        <Marquee/>
        <ContentComponent/>
        <BoxComponent/>
        <AboutComponent/>
        <ContactComponent/>
        <FooterComponent/>
    </>);
}
createRoot(document.getElementById("root")).render(<Container/>);