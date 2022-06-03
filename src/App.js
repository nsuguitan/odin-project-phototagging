import './App.css';
import CursorContextProvider from './contexts/CursorContextProvider';
import Cursor from './components/Cursor';
import Dropdown from './components/Dropdown';
import GameImage from './components/GameImage';


function App() {
  return (
    <CursorContextProvider>
      <Cursor />
      <div className="App">
        <GameImage />
        <Dropdown />
      </div>
    </CursorContextProvider>
    
  );
}

export default App;
