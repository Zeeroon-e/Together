import React from 'react'
import CreateForm from '../components/CreateForm'
import Header from '../components/Header'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './homeCreate.scss'
function Home() {
  const navigate = useNavigate();


  const fetchData = async () => {
    const response = await fetch('/api/files/getfiles', { mode: 'cors' });
    const data = await response.json();
    let activeUser = localStorage.getItem('activeUser');
    const found = data.filter((data: { user: string | null; }) => data.user === activeUser)
    if (found.length > 0) {
      console.log('found!')
      navigate('/home');
    } else {
      console.log('didnt find');
    }
    

    

  }

  useEffect(() => {
    fetchData()
}, []);

  return (
    <div>
      <nav className='header-display'>
        <Header />
      </nav>
      <main className='content-container'>
        <CreateForm />
      </main>
    
    </div>
  )
}

export default Home
