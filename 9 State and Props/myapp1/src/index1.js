// concept of class component
import React from 'react';
import { createRoot } from 'react-dom/client';
class MyComponent extends React.Component{
    stateDemo={
        name:"Andrew Anderson"
    }
    state={
        name:"Jackson Jack"
    }
    render(){
        return(<>
        {console.log(this)}

        </>);
    }
}
createRoot(document.getElementById('root')).render(<MyComponent name="ram"/>);