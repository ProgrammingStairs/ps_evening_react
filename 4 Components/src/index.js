// class component
import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

class Header extends React.Component{
    render(){
        return (<>
            <h1>This is Header Component....</h1>
            <p>This is an example of class component in react js.</p>
        </>);
    }
}
class Navbar extends React.Component{
    render(){
        return (<>
            <h1>This is Navbar Component....</h1>
            <p>This is an example of class component in react js.</p>
        </>);
    }
}
class Banner extends React.Component{
    render(){
        return (<>
            <h1>This is Banner Component....</h1>
            <p>This is an example of class component in react js.</p>
        </>);
    }
}
class Footer extends React.Component{
    render(){
        return (<>
            <h1>This is Footer Component....</h1>
            <p>This is an example of class component in react js.</p>
        </>);
    }
}
class MyComponent extends React.Component{
    render(){
        return (<>
            <Header/>
            <Navbar/>
            <Banner/>
            <Footer/>
        </>);
    }
}

createRoot(document.getElementById("root")).render(<MyComponent/>);
