import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Tema from './tema/Tema'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Milliomos</h1>
      <Tema />
    </div>
  )
}

export default App
