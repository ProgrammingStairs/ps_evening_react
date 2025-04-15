import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import HeaderComponent from './component/HeaderComponent.js';
import HomeComponent from './component/HomeComponent.js';
import LoginComponent from './component/LoginComponent.js';
import RegisterComponent from './component/RegisterComponent.js';
import ProfileComponent from './component/ProfileComponent.js';

function App() {
  return (
    <Router>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/register' element={<RegisterComponent/>}/>
        <Route path='/profile' element={<ProfileComponent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
