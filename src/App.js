import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePlay from './components/GamePlay';
import GameStartMenu from './components/GameStartMenu';
import Appbar from './components/Appbar';



function App() {
  return (
    
      <BrowserRouter>
          <Appbar />
          <Routes>
            <Route exact path="/" element={<GameStartMenu />} />
            <Route exact path="/Game" element={<GamePlay />} />
          </Routes>
        </BrowserRouter>      
    
  );
}

export default App;
