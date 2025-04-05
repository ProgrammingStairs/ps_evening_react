import '../style.css';
import boxImage from '../images/banner.jpg';
function BoxComponent(){
    return (<div id='box'>
        <div id='subbox'>
            <img src={boxImage} alt='' id='boxImg'/>
            <div id='innerbox'>
                <h3>Super Offers</h3>
                <br/>
                <p>
                    Hurry Up to avail the super offer at more discount.Be the one to grab the offer of 25% discount on your first order worth Rs. 1000.
                </p>
                <br/>
                <button>Click to Avail</button>
            </div>
        </div>
        <div id='subbox'>
        <img src={boxImage} alt='' id='boxImg'/>
            <div id='innerbox'>
                <h3>Super Offers</h3>
                <br/>
                <p>
                    Hurry Up to avail the super offer at more discount.Be the one to grab the offer of 25% discount on your first order worth Rs. 1000.
                </p>
                <br/>
                <button>Click to Avail</button>
            </div>

        </div>
        <div id='subbox'>
        <img src={boxImage} alt='' id='boxImg'/>
            <div id='innerbox'>
                <h3>Child Offers</h3>
                <br/>
                <p>
                    Hurry Up to avail the super offer at more discount.Be the one to grab the offer of 25% discount on your first order worth Rs. 1000.
                </p>
                <br/>
                <button>Click to Avail</button>
            </div>

        </div>
        <div id='subbox'>
        <img src={boxImage} alt='' id='boxImg'/>
            <div id='innerbox'>
                <h3>Humpty Dumpty Offers</h3>
                <br/>
                <p>
                    Hurry Up to avail the super offer at more discount.Be the one to grab the offer of 25% discount on your first order worth Rs. 1000.
                </p>
                <br/>
                <button>Click to Avail</button>
            </div>

        </div>
    </div>);
}
export default BoxComponent;