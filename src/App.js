import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import SideBar from './components/SideBar/SideBar'

export default function App() {
  return (
    <Router>
      <Header />
      <SideBar />
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}
