import react from 'react'
import './App.css'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='min-h-screen flex flex-wrap content-between' style={{ background: '#008585' }}>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )

}

export default App
