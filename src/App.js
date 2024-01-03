import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
