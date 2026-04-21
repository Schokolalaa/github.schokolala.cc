import pfp from './pfp.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hii, This is The GitHub page off <a className="App-link" href="https://schokolala.cc" target="_blank" rel="noopener noreferrer">Schokolala.cc</a> :3</h1>
        
        <img src={pfp} className="pfp-logo" alt="Pfp" />
        <p>This is Like a LinkTree</p>
        <a
          className="App-link"
          href="https://schokolala.cc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schokolala.cc
        </a>
        
      </header>
    </div>
  );
}



export default App;
