import { Link} from 'react-router-dom';
function HeaderComponent(){
    return(<div style={{backgroundColor:"black",color:"white",padding:"10px"}}>
        <Link style={{color:"white",textDecoration:"none"}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",textDecoration:"none"}} to='/about'>About</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link style={{color:"white",textDecoration:"none"}} to='/contact'>Contact</Link>
    </div>);
}
export default HeaderComponent;