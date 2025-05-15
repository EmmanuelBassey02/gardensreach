import './App.css'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import ApplyForJob from './pages/ApplyForJob'
import ScrollToTop from '../ScrollToTop';


function App() {

  return (
    <>
     <BrowserRouter>
         <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/job-application' element={<ApplyForJob/>} />
            <Route path='*' element={<ErrorPage/>} />
            
            {/* <Route path="/login" element={<LoginPage />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
          </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
