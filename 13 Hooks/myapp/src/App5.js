// example showing the concept of useContext and createContext
import logo from './logo.svg';
import './App.css';
import { createContext, useContext, useState } from 'react';
var context = createContext(null);

function App() {  
  const [fname,setFname] = useState('Andrew');
  const [lname,setLname] = useState('Anderson');
  return (<context.Provider value={{fname,lname}}>
    <ChildA/>
  </context.Provider>);
}

function ChildA(){
    return(<>
        <ChildB/>
    </>);
}

function ChildB(){
    return(<>
        <ChildC/>
    </>);
}

function ChildC(){
    const res = useContext(context);
    return(<>
        <h1>
            Fname : {res.fname} <br/>
            Lname : {res.lname} <br/>  
        </h1>
    </>);
}

export default App;

