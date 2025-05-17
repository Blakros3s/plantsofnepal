import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Add from './pages/Add'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/" element={<div>Home Page</div>} />
    </Routes>
  )
}

export default App
