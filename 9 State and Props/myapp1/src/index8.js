// example showing the concept of functional component
// In case of functional component, we manage state with the help of hooks
// here we are using useState() hook to perform the operation

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyComponent(){
    const [age,setAge] = useState();
    const [name,setName] = useState();
    const [obj,setObj] = useState({});
    const handleSubmit = ()=>{
        setObj({
            age:age,
            name:name
        });
    }
    return (<>
        <input 
            placeholder='Enter Age'
            name='age'
            onChange={(event)=>{
                // console.log(event.target.value);
                setAge(event.target.value);
            }}
        /> <br/>
        <input 
            placeholder='Enter name'
            name='name'
            onChange={(event)=>{
                setName(event.target.value);
            }}
        /> <br/>
        <input 
            value='Submit' 
            type="submit"
            onClick={handleSubmit}
        />
        <h1>{obj.age ? `Age : ${age}`: ""}</h1>
        <h1>{obj.name ? `Name : ${name}`: ""}</h1>

    </>);
}
createRoot(document.getElementById("root")).render(<MyComponent/>);
