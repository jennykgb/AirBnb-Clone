import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data.js'

function App() {
  const cards = data.map((data)=> {
    return (
      <Card 
      key={data.id}
      data={data}/>
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='cardarea'>
        {cards}
      </div>
    </div>
  )
}

export default App
