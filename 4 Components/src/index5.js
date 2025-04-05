// functional component
import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

function Header(){
    return (<>
        <h1>This is Header Component</h1>
        <p>This is an example of functional component in react js.</p>
    </>);
}
function Navbar(){
    return (<>
        <h1>This is Navbar Component</h1>
        <p>This is an example of functional component in react js.</p>
    </>);
}
function Banner(){
    return (<>
        <h1>This is Banner Component</h1>
        <p>This is an example of functional component in react js.</p>
    </>);
}
function Footer(){
    return (<>
        <h1>This is Footer Component</h1>
        <p>This is an example of functional component in react js.</p>
    </>);
}
function MyComponent(){
    return (<>
        <Header/>
        <Navbar/>
        <Banner/>
        <Footer/>
    </>);
}

createRoot(document.getElementById("root")).render(<MyComponent/>);