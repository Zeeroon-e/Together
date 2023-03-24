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
      navigate('/home');
    } else {
      console.log('createform page');
    }
  }

  useEffect(() => {
    fetchData()
}, []);

  return (
    <>
      
        <Header />
      
      <main className='content-wrapper '>
        
        <CreateForm />
      </main>
    
    </>
  )
}

export default Home
