import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Skill from './Pages/Skill/Skill'
import Project from './Pages/Projects/Project'

function App() {
 

  return (
    <div className='w-[100%] h-auto flex flex-col bg-[#e9e8f0]'>
      <Navbar/>
      <Home/>
      <Skill/>
      <About/>
      <Project/>
    </div>
  )
}

export default App
