import NavBar from './components/Navbar';
import "./style.css"
import MemoryGame from './pages/MemoryGame';
import MagicSquare from './pages/MagicSquare';
import Tenzies from './pages/Tenzies';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import {Routes, BrowserRouter as Router, Route} from "react-router-dom"


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="memory-game" element={<MemoryGame/>} />
        <Route path="magic-sqaure" element={<MagicSquare/>} />
        <Route path="tenzies" element={<Tenzies/>} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
