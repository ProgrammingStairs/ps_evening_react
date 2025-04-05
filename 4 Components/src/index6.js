// functional component
import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import Header from './components/HeaderComponent.js';
import Navbar from './components/NavbarComponent.js';
import Banner from './components/BannerComponent.js';
import Footer from './components/FooterComponent.js';

function MyComponent(){
    return (<>
        <Header/>
        <Navbar/>
        <Banner/>
        <Footer/>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);