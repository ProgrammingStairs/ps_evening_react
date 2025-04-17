import logo from './logo.svg';
import './App.css';
import {useReducer} from 'react';

var initialState = {
  counter1 : 0
};

const reducer = (state,action)=>{
  switch(action.type){
    case 'increment' : 
        return {...state,counter1:state.counter1+action.value};
    case 'decrement' : 
        return {...state,counter1:state.counter1-action.value};
    case 'reset' : 
        return {...state,counter1:action.value};
    default:
        return initialState;   
  }
}

function App() {
  const [count,dispatch] = useReducer(reducer,initialState);  
  return (<>
    <h2>Example of Hook | useReducer </h2>
    <h3>Count : {count.counter1}</h3>
    <button onClick={()=>{dispatch({type:'increment',value:1})}}>Increment</button>
    <button onClick={()=>{dispatch({type:'decrement',value:1})}}>Decrement</button>
    <button onClick={()=>{dispatch({type:'reset',value:0})}}>Reset</button>
  </>);
}

export default App;
