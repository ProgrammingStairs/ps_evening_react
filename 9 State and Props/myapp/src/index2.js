import React from 'react';
import {createRoot} from 'react-dom/client';

function FunComponent(props){
    return (<>
        <h2>Hello {props.name}, your age is {props.age} and salary is {props.salary}</h2>
    </>);
}
class ClassComponent extends React.Component{
    render(){
        return (<>
            <h2>Hello {this.props.name}, your age is {this.props.age} and salary is {this.props.salary}</h2>
        </>);
    }
}

function MyComponent(){
    return(<>
        <FunComponent name="Andrew Anderson" age={56} salary="123"/>
        <ClassComponent name="Mathew Math" age={34} salary="456"/>
    </>);
}
createRoot(document.getElementById('root')).render(<MyComponent/>);