import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePlay from './components/GamePlay';
import GameStartMenu from './components/GameStartMenu';



function App() {
  return (
    
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<GameStartMenu />} />
            <Route exact path="/Menu" element={<GameStartMenu />} />
            <Route exact path="/Game" element={<GamePlay />} />
          </Routes>
        </BrowserRouter>      
    
  );
}

export default App;
