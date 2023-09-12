import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Leftbar from './components/Leftbar'
import Banner from './components/Banner'
import About from './components/About'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex'>
      <Leftbar/>
      
      <div className='w-[100%]'>
      <Navbar />
      <Banner/>
        <div className='flex'>
          <About/>
          <Content/>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
