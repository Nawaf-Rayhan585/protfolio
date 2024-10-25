import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Hero/>
      <Skills/>
      <Projects/>
    </div>
    </>
  )
}

export default App
