import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'

export default function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}
