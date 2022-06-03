import './App.css';
import CursorContextProvider from './contexts/CursorContextProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePlay from './components/GamePlay';
import GameStartMenu from './components/GameStartMenu';



function App() {
  return (
    
    <CursorContextProvider>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<GameStartMenu />} />
            <Route exact path="/Game" element={<GamePlay />} />
          </Routes>
        </BrowserRouter>      
    </CursorContextProvider>
    
  );
}

export default App;
