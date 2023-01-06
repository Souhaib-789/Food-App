import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

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
    
    </div>
  );
}

export default App;
