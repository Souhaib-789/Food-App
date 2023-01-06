import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import SignIn from './screens/login/Login';
import Signup from './screens/signup/Signup';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';

function App() {


  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<SignIn/>} /> */}
        <Route path='/signup' element={<Signup/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    
    
    </div>
  );
}

export default App;
