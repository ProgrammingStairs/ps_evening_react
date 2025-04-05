import React from 'react';
import {createRoot} from 'react-dom/client';

function FunComponent(props){
    return (<>
        {/* {console.log(props)} */}
        <h2>Hello {props.name}</h2>
    </>);
}
class ClassComponent extends React.Component{
    render(){
        // {console.log(this)}
        return (<>
            <h2>Hello {this.props.name}</h2>        
        </>);
    }
}

function MyComponent(){
    return(<>
        <FunComponent name="Andrew Anderson"/>
        <ClassComponent name="Mathew Math"/>
    </>);
}
createRoot(document.getElementById('root')).render(<MyComponent/>);