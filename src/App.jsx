import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import SignIn from './screens/login/Login';
import Signup from './screens/signup/Signup';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home/Home';
import Wishlist from './screens/wishlist/Wishlist';
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<SignIn />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<Home />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='*' element={<h1 style={{ textAlign: 'center', marginTop: '20px' }}>Error 404 Page Not Found </h1>} />
        </Route>

      </Routes>



    </div>
  );
}

export default App;
