// example showing the concept of useRef()

import { useRef,useState } from "react";
import { createRoot } from "react-dom/client";

function MyComponent(){
    const username = useRef();
    const age = useRef();
    const [userObj,setUserObj] = useState({});
    // console.log("----------->",username.current.value);
    
    function handleSubmit(event){
        event.preventDefault();
        var obj = {
            username : username.current.value, 
            age : age.current.value
        }
        setUserObj(obj);
        event.target.reset();
    }
    return(<>
    <form action="" onSubmit={handleSubmit}>
        <input 
            type='text'
            placeholder='Enter Username'
            ref={username}
        />
        <input 
            type='age'
            placeholder='Enter Age'
            ref={age}
        />
        <input 
            type='submit'
            value='Submit'
        />
        <input 
            type='reset'
            value='Reset'
        />
    </form>       
    {userObj.username ? `Username : ${userObj.username}` : ''} <br/>
    {userObj.age ? `Age : ${userObj.age}` : ''} <br/>

    </>);
}
createRoot(document.getElementById('root')).render(<MyComponent/>);
