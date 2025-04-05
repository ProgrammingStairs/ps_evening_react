import React from 'react';
import { createRoot } from 'react-dom/client';

function FunComponent(props) {
    return (
        <>
            <h2>BookName : {props.book.bookName}</h2>
        </>
    );
}

class ClassComponent extends React.Component {
    render() {
        return (
            <>
                <h2>BookName : {this.props.book.bookName}</h2>
            </>
        );
    }
}

function MyComponent() {
    return (
        <>
            <FunComponent  book={{bookName:"Programming in C"}}/>
            <ClassComponent book={{bookName:"Programming in C"}}/>
        </>
    );
}

createRoot(document.getElementById('root')).render(<MyComponent />);