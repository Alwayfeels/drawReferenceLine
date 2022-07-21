import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "antd/dist/antd.css";
import Intro from './view/Intro'
import CanvasView from './view/CanvasView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Intro></Intro>
      <CanvasView></CanvasView>
    </div>
  )
}

export default App
