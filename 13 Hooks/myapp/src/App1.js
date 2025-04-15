import logo from './logo.svg';
import './App.css';
import {useReducer} from 'react';

var initialState = 0;

const reducer = (state,action)=>{
  switch(action){
    case 'increment' : 
        return state+1;
    case 'decrement' : 
        return state-1;
    case 'reset' : 
        return initialState;
    default:
        return initialState;   
  }
}

function App() {
  const [count,dispatch] = useReducer(reducer,initialState);  
  return (<>
    <h2>Example of Hook | useReducer </h2>
    <h3>Count : {count}</h3>
    <button onClick={()=>{dispatch('increment')}}>Increment</button>
    <button onClick={()=>{dispatch('decrement')}}>Decrement</button>
    <button onClick={()=>{dispatch('reset')}}>Reset</button>
  </>);
}

export default App;
