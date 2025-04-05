import '../style.css';
import img from '../images/banner.jpg';
function AboutComponent(){
    return (<div id='about'>
        <center>
            <h1>About Us</h1>
        </center>
        <div id='leftabout'>
            <img src={img} id='aboutimg' alt=''/>
        </div>
        <div id='rightabout'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit libero necessitatibus voluptatum tempore obcaecati temporibus nisi repellendus doloremque placeat asperiores. Molestias, distinctio! Saepe praesentium delectus ea vero nihil sunt esse, maiores recusandae cum at unde libero fugit eligendi ipsam, culpa iusto exercitationem neque ut sequi sit. Sapiente, earum alias dolores architecto, officia voluptatem soluta quaerat suscipit aliquid id expedita. Laboriosam, fugit corporis error quas repellendus et cupiditate, inventore eaque obcaecati eum, consectetur neque architecto veniam? Iure, nisi. Ratione magnam, tempora facere adipisci ut quos sequi a accusantium quisquam omnis perspiciatis non temporibus. Soluta iusto quasi ducimus velit possimus repellendus? Adipisci.
        <br/><br/>
        Quas repellendus et cupiditate, inventore eaque obcaecati eum, consectetur neque architecto veniam? Iure, nisi. Ratione magnam, tempora facere adipisci ut quos sequi a accusantium quisquam omnis perspiciatis non temporibus. Soluta iusto quasi ducimus velit possimus repellendus? Adipisci.
        Quas repellendus et cupiditate, inventore eaque obcaecati eum, consectetur neque architecto veniam? Iure, nisi. Ratione magnam, tempora facere adipisci ut quos sequi a accusantium quisquam omnis perspiciatis non temporibus. Soluta iusto quasi ducimus velit possimus repellendus? Adipisci.

        </div>
    </div>);
}
export default AboutComponent;