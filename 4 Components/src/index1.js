// functional component
import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

function MyFunction(){
    return <h1>This is an example of Functional component</h1>;
}

createRoot(document.getElementById("root")).render(<MyFunction/>);