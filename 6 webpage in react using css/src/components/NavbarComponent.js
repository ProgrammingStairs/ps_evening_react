import '../style.css';
function Navbar(){
    return(<div id='nav'>
        <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>Services</a></li>
            <li><a href=''>Orders</a></li>
            <li><a href=''>Product &#9662;</a>
                <ul>
                    <li><a href=''>Product1</a></li><br/>
                    <li><a href=''>Product2</a></li><br/>
                    <li><a href=''>Product3</a></li><br/>
                    <li><a href=''>Product4</a></li><br/>
                    <li><a href=''>Product5</a></li><br/>
                </ul>
            </li>
            <li><a href=''>About</a></li>
            <li><a href=''>Contact</a></li>
            <li><a href=''>FAQ</a></li>
            <li><a href=''>Account</a></li>
        </ul>
    </div>);
}
export default Navbar;