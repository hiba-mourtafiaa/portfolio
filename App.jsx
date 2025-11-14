import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './Header'
import Hero from './Hero'
import Skills from './Skills'
import About from './About'
import Project from './Project'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Skills/>
    <About/>
    <Project/>
    <Contact/>
    </>
  )
}

export default App
