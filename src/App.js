import logo from './logo.svg';
import './App.css';
import Player from './Player';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Player />
      </header>
    </div>
  );
}

export default App;
