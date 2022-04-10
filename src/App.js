import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import Login from './components/Login/Login';
import './App.css'
import Register from './components/Register/Register';
import Products from './components/Products/Products';

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path ='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
    </div>
  );
};

export default App;