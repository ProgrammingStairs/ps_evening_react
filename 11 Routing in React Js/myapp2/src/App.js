import logo from './logo.svg';
import './App.css';
// import { Route, HashRouter as Router, Routes} from 'react-router-dom';
import { Route, MemoryRouter as Router, Routes} from 'react-router-dom';
// import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import AboutComponent from './component/AboutComponent.js';
import ContactComponent from './component/ContactComponent.js';
import HeaderComponent from './component/HeaderComponent.js';
import HomeComponent from './component/HomeComponent.js';
import ContactComponent1 from './component/ContactComponent1.js';
import ContactComponent2 from './component/ContactComponent2.js';

function App() {
  return (<>
    <Router>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/about' element={<AboutComponent/>}/>
        <Route path='/contact' element={<ContactComponent/>}>
          <Route path='ContactComponent1' element={<ContactComponent1/>}/>
          <Route path='ContactComponent2' element={<ContactComponent2/>}/>
        </Route>
      </Routes>
    </Router>
  </>);
}

export default App;
