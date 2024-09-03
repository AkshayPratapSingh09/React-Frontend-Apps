import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  
  return (
    <>
    <div className="parent">
      <Card Heading="First Card" TechStack="ReactJs"/>
      <Card Heading="First Card" TechStack="ReactJs"/>
      <Card Heading="First Card" TechStack="ReactJs"/>
    </div>
    </>
  )
}

export default App
