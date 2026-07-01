import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import Profile from "./Pages/Profile"
import Hero from "./Pages/Hero"
import Cards from "./Pages/Cards"
import Cards2 from "./Pages/Cards2"
import Cards3 from "./Pages/Cards3"
import Cards4 from "./Pages/Cards4"
import Cards5 from "./Pages/Cards5"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Appointment from "./Pages/Appointment"
import About from "./Pages/About"
import Facilities from "./Pages/Facilities"
import Specialities from "./Pages/Specialities"
import Contact from "./Pages/Contact"
import ChatBot from "./Pages/ChatBot"
import Corporate from "./Pages/Corporate"
import Patient from "./Pages/Patient"
import Emergency from "./Pages/Emergency"
import Consultant from "./Pages/Consultant"
import News from "./Pages/news"
import Lives from "./Pages/Lives"
import Enquiry from "./Pages/Enquiry"
import Feedback from "./Pages/Feedback"
import Career from "./Pages/Career"
import Mail from "./Pages/Mail"

import ProtectedRoute from "./Component/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <div style={{ marginTop: "90px"}}>
        <Routes>

          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Cards />
                <Cards2 />
                <Cards3 />
                <Cards4 />
                <Cards5 />
                <ChatBot />
              </>
            } 
          />

          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />

          <Route 
            path="/appointment" 
            element={
              <ProtectedRoute>
                <Appointment />
              </ProtectedRoute>
            } 
          />

          <Route path="/corporate" element={<Corporate />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/emergency" element={<Emergency />} />

          <Route path="/consultant" element={<Consultant />} />
          <Route path="/news" element={<News />} />
          <Route path="/lives" element={<Lives />} />

          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/career" element={<Career />} />
          <Route path="/mail" element={<Mail />} />

        </Routes>
      </div>

      <Footer />

    </BrowserRouter>
  )
}

export default App