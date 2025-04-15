import { Link, Outlet } from "react-router-dom";
function ContactComponent(){
    return(<>
        <div>
            <Link style={{padding:"10px",margin:"2px",backgroundColor:"black",color:"white",textDecoration:"none"}} to='/contact/ContactComponent1'>Contact Component 1</Link>
            
            <Link style={{padding:"10px",margin:"2px",backgroundColor:"black",color:"white",textDecoration:"none"}} to='/contact/ContactComponent2'>Contact Component 2</Link>
            
        </div>
        <Outlet/>
    </>);
}
export default ContactComponent;