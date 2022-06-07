import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePlay from './components/GamePlay';
import GameStartMenu from './components/GameStartMenu';
import Context from './contexts/GameContext';
import { GameImageProvider } from './contexts/GameImageContext';



function App() {
  return (
      <Context>
        <GameImageProvider>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<GameStartMenu />} />
            <Route exact path="/Menu" element={<GameStartMenu />} />
            <Route exact path="/Game" element={<GamePlay />} />
          </Routes>
        </BrowserRouter>
        </GameImageProvider>
        </Context>      
    
  );
}

export default App;
