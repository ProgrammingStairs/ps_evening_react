import { useState } from "react";
function RegisterComponent(){
    const [studentObject, setStudentObject] = useState({});
    const getData = (event)=>{
        const {name,value} = event.target;
        setStudentObject({...studentObject,[name]:value});
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
            const dataReceived = localStorage.getItem("data");
           // console.log("dataReceived : ",dataReceived);
            if(!dataReceived){
                localStorage.setItem("data",JSON.stringify([...[],studentObject]));
            }else{
                const existingData = JSON.parse(localStorage.getItem("data"));
                const res = existingData.find((data)=> data.email==studentObject.email);
                // console.log("res-----------> ",res);
                if(!res)
                    localStorage.setItem("data",JSON.stringify([...existingData,studentObject]));
                else{
                    alert("Email Id already exist");
                }
            }
        event.target.reset();
    }
    return (<>
        <center><h2>Registration</h2>
          <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    id='username'
                    name='username'
                    onChange={getData}
                />
                <br/>
                <input
                    type="email"
                    placeholder="Enter Email"
                    id='email'
                    name='email'
                    onChange={getData}
                />
                <br/>
                <input
                    type="password"
                    placeholder="Enter Password"
                    id='password'
                    name='password'
                    onChange={getData}
                /> <br/>
                <input
                    type="text"
                    placeholder="Enter Address"
                    id='address'
                    name='address'
                    onChange={getData}
                />
                <br/>
                <input
                    type="submit"
                    value="Register"
                />
               <input
                    type="reset"
                    value="Reset"
                />
          </form>
        </center>
    </>);
}
export default RegisterComponent;