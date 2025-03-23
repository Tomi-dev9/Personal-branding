import React from 'react';
import './App.css';
import Header from './components/Header';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
