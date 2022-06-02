import logo from './logo.svg';
import './App.css';
import CursorContextProvider from './contexts/CursorContextProvider';
import Cursor from './components/Cursor';

function App() {
  return (
    <CursorContextProvider>
      <Cursor />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </CursorContextProvider>
    
  );
}

export default App;
