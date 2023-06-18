import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import SideBar from './components/SideBar/SideBar'
import Login from './pages/Login/Login'
import { Wrapper } from './App.styles'
import Channel from './pages/Channel/Channel'
import AddVideo from './pages/AddVideo/AddVideo'

export default function App() {
  return (
    <Router>
      <Header />
      <SideBar />
      <Wrapper>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/add-video" element={<AddVideo />} />
        </Routes>
      </Wrapper>
      <Footer />
    </Router>
  )
}
