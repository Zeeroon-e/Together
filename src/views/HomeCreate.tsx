import React from 'react'
import CreateForm from '../components/CreateForm'
import Header from '../components/Header'
import './homeCreate.scss'
function Home() {
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
