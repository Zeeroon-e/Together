import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './views/Login';
import SignUp from './views/SignUp';
import HomeCreate from './views/HomeCreate';
import Home from './views/Home';


function App() {
  

  return (
    <div className="app">
      <Routes>
        <Route element={ <Login /> } path='/' />
        <Route element={ <SignUp /> } path='/signup' />
        <Route element={ <HomeCreate /> } path='/homecreate' />
        <Route element={ <Home /> } path='/home' />

      </Routes >
    </div>
  )
}

export default App
