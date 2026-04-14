import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Fretboard from "./components/Fretboard.tsx"

function App() {
  return (
    <div>
      <h1>Fretboard</h1>
      <Fretboard />
    </div>

  )
}

export default App
