import { useState } from 'react'
import './App.css'

//Component Imports
import SnakesAndTreatsGrid from './components/SnakesAndTreatsGrid';
import Controls from './components/Controls';

function App() {
  const [gridSize, setGridSize] = useState(0);

  return (
    <>
      <Controls />
      <h1>Snakes and Treats Game</h1>
      <label htmlFor='gridSize'>Enter Size Of The Board</label>
      <input name='gridSize' type='number' onChange={(e) => setGridSize(Number(e.currentTarget?.value))} />
      <SnakesAndTreatsGrid gridSize={gridSize} />
    </>
  )
}

export default App