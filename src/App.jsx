import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/section1/login'
import Navbar from './components/section1/navbar'
import Sec1cont from './components/section1/sec1cont'
import sec1 from './components/section1/sec1'
import Sec1 from './components/section1/sec1'
import Blank from './components/section1/blank'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Sec1 />} />

        {/* Navbar */}
        <Route path="/nav" element={<Navbar />} />

        {/* Blank page */}
        <Route path="/blank" element={<Blank />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


