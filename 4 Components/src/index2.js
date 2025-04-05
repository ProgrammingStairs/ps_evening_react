// functional component
import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

function MyFunction(){
    return <div>
        <h1>This is an example of Functional component</h1>
        <h1>This is an example of Functional component</h1>
    </div>;
}

createRoot(document.getElementById("root")).render(<MyFunction/>);