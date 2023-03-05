import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './views/Login';
import SignUp from './views/SignUp';

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route element={ <Login /> } path='/' />
        <Route element={ <SignUp /> } path='signup' />
      </Routes >
    </div>
  )
}

export default App
