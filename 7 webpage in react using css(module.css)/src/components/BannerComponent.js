import '../style.css';
import banner from '../images/banner1.jpg';

function Banner(){
    return(<div id='banner'>
        <img src={banner} id='bannerImg' alt=''/>
    </div>);
}
export default Banner;