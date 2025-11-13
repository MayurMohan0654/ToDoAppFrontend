import { Routes, Route } from "react-router-dom"
import '../css/App.css'
import DashBoard from "../pages/DashBoard"
import Login from "../pages/Login.jsx"
import Register from "../pages/Register.jsx"


function App() {

  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  )
}

export default App
