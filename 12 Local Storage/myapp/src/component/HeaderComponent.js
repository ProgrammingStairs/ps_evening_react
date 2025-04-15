import {Link} from 'react-router-dom';
function HeaderComponent(){
    return (<>
        <center><h2>Example of Local Storage</h2>
    <hr/>
    <div style={{backgroundColor:"black",padding:"10px", fontSize:"20px"}}>
      <Link style={{color:"white"}} to='/'>Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link style={{color:"white"}} to='/login'>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link style={{color:"white"}} to='/register'>Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <hr/>
    </center>

    </>);
}
export default HeaderComponent;