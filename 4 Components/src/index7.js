// functional component
import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import Footer, { Banner, Header, Navbar } from './demo.jsx';

function MyComponent(){
    return (<>
        <Header/>
        <Navbar/>
        <Banner/>
        <Footer/>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);
