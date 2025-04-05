import React from 'react';
import { createRoot } from 'react-dom/client';

function FunComponent(props) {
    return (
        <>
            <h2>
                BookName : {props.book.bookName} <br/>
                BookPrice : {props.book.bookPrice} <br/>
                BookAuthor : {props.book.bookAuthor} <br/> 
            </h2>
        </>
    );
}

class ClassComponent extends React.Component {
    render() {
        return (
            <>
                <h2>
                    BookName : {this.props.book.bookName} <br/>
                    BookPrice : {this.props.book.bookPrice} <br/>
                    BookAuthor : {this.props.book.bookAuthor} <br/> 
                </h2>
            </>
        );
    }
}

// var bookObj = {
//         bookName:"Programming in C",
//         bookPrice:2300,
//         bookAuthor:"Dennis Ritchie"
//     }
function MyComponent() {
    var bookObj = {
        bookName:"Programming in C..",
        bookPrice:2300,
        bookAuthor:"Dennis Ritchie"
    }

    return (    
        <>
            <FunComponent  book={bookObj}/>
            <ClassComponent book={bookObj}/>
        </>
    );
}

createRoot(document.getElementById('root')).render(<MyComponent />);