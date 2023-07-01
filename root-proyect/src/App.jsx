import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
import { Tutores } from './components/Tutores'

function App() {

  return (
    <>
      
      <Tutores />
      <Counter />
    </>
  )
}

export default App
