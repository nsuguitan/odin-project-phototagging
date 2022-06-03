import './App.css';
import CursorContextProvider from './contexts/CursorContextProvider';
import Cursor from './components/Cursor';
import Dropdown from './components/Dropdown';


function App() {
  return (
    <CursorContextProvider>
      <Cursor />
      <div className="App">
        <Dropdown />
      </div>
    </CursorContextProvider>
    
  );
}

export default App;
