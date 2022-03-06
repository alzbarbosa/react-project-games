import NavBar from './components/Navbar';
import "./style.css"
import MemoryGame from './pages/MemoryGame';
import MagicSquare from './pages/MagicSquare';
import BlackJack from './pages/BlackJack';


function App() {
  return (
    <div>
      <NavBar />
      <BlackJack />
    </div>
  );
}

export default App;
