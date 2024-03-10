import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './Components/Countries/Countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{padding: '30px'}}>
      <h1>Explore React</h1>
      <Countries></Countries>
      </div>
    </>
  )
}

export default App
