import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePlay from './components/GamePlay';
import GameStartMenu from './components/GameStartMenu';
import { GameImageProvider } from './contexts/GameImageContext';
import MenuContextProvider from './contexts/GameMenuContext';



function App() {
  return (
        <MenuContextProvider>
        <GameImageProvider>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<GameStartMenu />} />
            <Route exact path="/Menu" element={<GameStartMenu />} />
            <Route exact path="/Game" element={<GamePlay />} />
          </Routes>
        </BrowserRouter>
        </GameImageProvider>
        </MenuContextProvider>
    
  );
}

export default App;
