import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import EnrollmentForm from './components/EnrollmentForm';

function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home onEnroll={() => setIsEnrollmentOpen(true)} />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

        <EnrollmentForm 
          isOpen={isEnrollmentOpen}
          onClose={() => setIsEnrollmentOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;