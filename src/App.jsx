import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import SignIn from './screens/login/Login';
import Signup from './screens/signup/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {

  useEffect(()=>{
    axios.get('https://api.spoonacular.com/food/products/search?query=pizza&apiKey=c67f7a16ab07455db25586f302928b7d')
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    
    
    </div>
  );
}

export default App;
