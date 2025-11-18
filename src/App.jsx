import { Routes, Route } from "react-router-dom"
import '../css/App.css'
import DashBoard from "./DashBoard.jsx"
import Login from "./Login.jsx"
import Register from "./Register.jsx"


function App() {

  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
