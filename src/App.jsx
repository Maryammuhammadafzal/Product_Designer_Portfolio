import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Skill from './Pages/Skill/Skill'
import Project from './Pages/Projects/Project'
import Testimonial from './Pages/Testimonial/Testimonial'
import Contact from './Pages/Contact/Contact'

function App() {
 

  return (
    <div className='w-full overflow-hidden h-auto flex flex-col gap-30  bg-[#e9e8f0]'>
      <Navbar/>
      <Home/>
      <Skill/>
      <About/>
      <Project/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default App
