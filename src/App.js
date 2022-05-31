import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Projects from './pages/Projects/Projects';
import Games from './pages/Games/Games';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  );
}

export default App;
