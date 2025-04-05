import React from 'react';
import { createRoot } from 'react-dom/client';

function FunComponent(props) {
    return (
        <>
            <h2>Hello {props.name}, your age is {props.age} and salary is {props.salary}</h2>
        </>
    );
}
function FunComponentNew({name , age=0, salary=0}) {
    return (
        <>
            <h2>Hello {name}, your age is {age} and salary is {salary}</h2>
        </>
    );
}

class ClassComponent extends React.Component {
    render() {
        return (
            <>
                <h2>Hello {this.props.name}, your age is {this.props.age} and salary is {this.props.salary}</h2>
            </>
        );
    }
}

// deprecated from React 18 and in above versions
FunComponent.defaultProps = {
    age: 0,
    salary: 0
};

ClassComponent.defaultProps = {
    age: 0,
    salary: 0
};

function MyComponent() {
    return (
        <>
            <FunComponent name="Andrew Anderson"  salary={123} />
            <ClassComponent name="Mathew Math" age={34} />
            <FunComponentNew name="Andrew Anderson"  salary={123} />
        </>
    );
}

createRoot(document.getElementById('root')).render(<MyComponent />);