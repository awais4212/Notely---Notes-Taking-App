import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App