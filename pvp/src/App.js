import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ExercisePage from './components/ExercisePage';
import QuizPage from './components/QuizPage';
import QuizIntro from './components/QuizIntro';
import Footer from './components/Footer';
import ArticlesPage from './components/ArticlesPage';
import ContactsPage from './components/ContactsPage';
import './styles/Global.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: '-100vw' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100vw' }}
        transition={{ type: 'tween', ease: 'anticipate', duration: 0.3 }}
        style={{ position: 'relative', width: '100%' }}
      >
        <Routes location={location}>
          <Route path="/" element={<MainContent />} />
          <Route path="/exercises" element={<ExercisePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz-intro" element={<QuizIntro />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Navbar is now outside and independent of AnimatedRoutes */}
        <div className="content">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
