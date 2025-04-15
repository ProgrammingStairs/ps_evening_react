import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import AboutComponent from './component/AboutComponent.js';
import ContactComponent from './component/ContactComponent.js';
import HeaderComponent from './component/HeaderComponent.js';
import HomeComponent from './component/HomeComponent.js';

function App() {
  return (<>
    <Router>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/about' element={<AboutComponent/>}/>
        <Route path='/contact' element={<ContactComponent/>}/>
      </Routes>
    </Router>
  </>);
}

export default App;
