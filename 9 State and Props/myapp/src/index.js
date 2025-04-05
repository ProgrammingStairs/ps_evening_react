import React from 'react';
import { createRoot } from 'react-dom/client';

function FunComponent(props) {
    return (
        <>
        {/* {console.log(props)} */}
        <h2>Functional Component</h2>        
               <table border='1' cellpadding='10' cellspacing='0'> 
                    <tr>
                        <th>S.No</th>
                        <th>BookName</th>
                        <th>Price</th>
                        <th>Author</th>
                    </tr>
                    {
                        props.book.map((bookObj,index)=>{
                            return (<tr>
                                <td>{index+1}</td>
                                <td>{bookObj.bookName}</td>
                                <td>{bookObj.bookPrice}</td>
                                <td>{bookObj.bookAuthor}</td>
                            </tr>);
                        })
                    }
               </table>
        </>
    );
}

class ClassComponent extends React.Component {
    render() {
        return (
            <>
            <h2>Class Component</h2>
               <table border='1' cellpadding='10' cellspacing='0'> 
                    <tr>
                        <th>S.No</th>
                        <th>BookName</th>
                        <th>Price</th>
                        <th>Author</th>
                    </tr>
                    {
                        this.props.book.map((bookObj,index)=>{
                            return (<tr>
                                <td>{index+1}</td>
                                <td>{bookObj.bookName}</td>
                                <td>{bookObj.bookPrice}</td>
                                <td>{bookObj.bookAuthor}</td>
                            </tr>);
                        })
                    }
               </table>
            </>
        );
    }
}

var bookObj = [{
        bookName:"Programming in C",
        bookPrice:2300,
        bookAuthor:"Dennis Ritchie"
    },{
        bookName:"Programming in Java",
        bookPrice:5600,
        bookAuthor:"James Gosling"
    }]
function MyComponent() {
    return (    
        <>
            <FunComponent  book={bookObj}/>
            <ClassComponent book={bookObj}/>
        </>
    );
}

createRoot(document.getElementById('root')).render(<MyComponent />);