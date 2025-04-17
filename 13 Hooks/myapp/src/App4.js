// example showing the concept of prop drilling
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [fname,setFname] = useState('Andrew');
  const [lname,setLname] = useState('Anderson');
  return (<>
    <ChildA fname={fname} lname={lname}/>
  </>);
}

function ChildA(props){
    return(<>
        <ChildB fname={props.fname} lname={props.lname}/>
    </>);
}

function ChildB(props){
    return(<>
        <ChildC fname={props.fname} lname={props.lname}/>
    </>);
}

function ChildC(props){
    return(<>
        <h1>
            Fname : {props.fname} <br/>
            Lname : {props.lname} <br/>  
        </h1>
    </>);
}

export default App;

