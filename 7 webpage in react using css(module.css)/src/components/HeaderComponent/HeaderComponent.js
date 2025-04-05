import logo from '../../images/logo.png';
import styles from './header.module.css';
function Header(){
    return(<div className={styles.header}>
        <img src={logo} className={styles.logo} alt=''/>
    </div>);
}
export default Header;