import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Games from './pages/Games/Games';
import Contact from './pages/Contact/Contact';
import Experience from './pages/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />       
      </Routes>
    </div>
  );
}

export default App;
