import logo from '../images/logo.png';
import '../style.css';
function Header(){
    return(<div id='header'>
        <img src={logo} id='logo' alt=''/>
    </div>);
}
export default Header;