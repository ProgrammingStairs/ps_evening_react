import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';

function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  const res =  useCallback(()=>{
    setResult(addition());    
  },[num1,num2]);

  function addition(){
    return parseInt(num1)+parseInt(num2);
  }
  return (<>
    <input
      type='text'
      placeholder='Enter first number'
      name='num1'
      onChange={(event)=>{
        setNum1(event.target.value);
      }}
    />
    <input
      type='text'
      placeholder='Enter second number'
      name='num2'
      onChange={(event)=>{
        setNum2(event.target.value);
      }}
    />
    <input
      type='submit'
      onClick={res}
    />

    <h2>Result : {result}</h2>  
  </>);
}

export default App;
