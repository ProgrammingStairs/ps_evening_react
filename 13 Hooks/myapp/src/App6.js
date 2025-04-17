// example showing the concept of useContext and createContext
import logo from './logo.svg';
import './App.css';
import { memo,useMemo, useState } from 'react';
/*
    memo = deals with component 
    useMemo = deals with functions
*/
const Memoized = memo((props)=>{
    console.log(`Hello ${props.fname} ${props.lname} | memoized`);
    return(<>
        <h2>Hello {props.fname} {props.lname} | memoized</h2>
    </>);
});
const UnMemoized = (props)=>{
    console.log(`Hello ${props.fname} ${props.lname} | unmemoized`);
    return(<>
        <h2>Hello {props.fname} {props.lname} | unmemoized</h2>
    </>);
}

function App() {  
  const [count,setCount] = useState(0);  
  const [fname,setFname] = useState('Andrew andy...');
  const [lname,setLname] = useState('Anderson');
  const memoized = useMemo(()=><Memoized fname={fname} lname={lname}/>,[fname,lname]);
  return (<>
        <h2>Count : {count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <h1>Memoized Function</h1>
        {memoized}

        <h1>UnMemoized Function</h1>
        <UnMemoized fname={fname} lname={lname}/>            
  </>);
}

export default App;

