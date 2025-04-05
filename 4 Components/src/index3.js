// functional component
import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

function MyFunction(){
    return <React.Fragment>
        <h1>This is an example of Functional component</h1>
        <h1>This is an example of Functional component</h1>
    </React.Fragment>;
}

createRoot(document.getElementById("root")).render(<MyFunction/>);