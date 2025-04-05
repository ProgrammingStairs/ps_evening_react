// example showing the concept of functional component
// In case of functional component, we manage state with the help of hooks
// here we are using useState() hook to perform the operation

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyComponent(){
    const [count,setCount] = useState(0);
    const [counterTitle,setTitle] = useState("Counting");
    const increment = ()=>{
        setCount(count+1);
    };
    const decrement = ()=>{
        setCount(count-1);
    }
    return (<>
        <h1>{counterTitle} : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <button onClick={()=>{setCount(count+3)}}>IncrementBy3</button>
        <button onClick={()=>{setTitle("CounterTitle")}}>Change Title</button>
    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);