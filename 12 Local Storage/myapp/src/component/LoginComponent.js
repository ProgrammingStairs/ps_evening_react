import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function LoginComponent(){
    const [studentObject, setStudentObject] = useState({});
    const getData = (event)=>{
        const {name,value} = event.target;
        setStudentObject({...studentObject,[name]:value});
    }
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        const loginCheckData = JSON.parse(localStorage.getItem("data"));
        const res = loginCheckData.find((data)=> data.email==studentObject.email && data.password==studentObject.password);
        if(res){
            navigate('/profile',{
                state:{
                    email:studentObject.email
                }
            })
        }      
        event.target.reset();
    }
    return (<>
        <center><h2>Login</h2>
          <form action="" onSubmit={handleSubmit}>
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
                    type="submit"
                    value="Login"
                />
               <input
                    type="reset"
                    value="Reset"
                />
          </form>
        </center>
    </>);
}
export default LoginComponent;