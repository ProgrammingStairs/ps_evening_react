import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent.js';
import FooterComponent from './components/FooterComponent.js';
import LeftSideComponent from './components/LeftSideComponent.js';
import RightSideComponent from './components/RightSideComponent.js';

function App() {
  return (<>
      <HeaderComponent/>
      <div>
        <LeftSideComponent/>
        <RightSideComponent/>      
      </div>
      <FooterComponent/> 
  </>);
}

export default App;
