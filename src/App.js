import pfp from './pfp.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 >Hii, This is The GitHub page of <a className="App-link" href="https://schokolala.cc" target="_blank" rel="noopener noreferrer">Schokolala.cc</a> :3</h1>
        
        <img src={pfp} className="pfp-logo" alt="Pfp" />
        <p>This is Like a LinkTree</p>
        <a href="mailto:schoko@schokolala.cc">schoko@schokolala.cc</a>
        <img className="pfp-logo" src="https://cataas.com/cat?width=100" alt="Cat"></img>
        <a className="App-link" href="https://cataas.com/cat?width=100">cataas.com</a>
        <ul>
        <li>
          <a
          className="App-link"
          href="https://schokolala.cc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schokolala.cc</a>
        </li>
        <li>
          <a
            className="App-link"
            href="https://mc.schokolala.cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mc.Schokolala.cc</a>
        </li>
        <li> 
          <a
            className="App-link"
            href="https://github.com/Schokolalaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub</a>
        </li>
        <li> 
          <a
            className="App-link"
            href="https://www.youtube.com/@mrschokola"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube</a>
        </li>
        <li>
          <a
            className="App-link"
            href="https://bsky.app/profile/msschoko.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            BlueSky</a>
        </li>
        <li>
          <a
            className="App-link"
            href="https://www.instagram.com/schokolala/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram</a>
        </li>
        <li>
          <a
            className="App-link"
            href="https://soundcloud.com/msschoko"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soundcloud</a>
        </li>
        </ul>
        <section
          className="iframe-Skrillex-Soundcloud"
        >
        <iframe title="Skrill" width="100%" height="166" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2429026&color#6e61fb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        <div 
          className="Soundcloud-Skrillex"
        >
          <a 
            className="Skrillex"
            href="https://soundcloud.com/skrillex" 
            title="Skrillex" 
            target="_blank"
            rel="noopener noreferrer"
            >
            Skrillex
          </a> · 
          <a 
            className="SCREAM-N-SHOUT"
            href="https://soundcloud.com/skrillex/scream-n-shout" 
            title="SCREAM N SHOUT" 
            target="_blank" 
            rel="noopener noreferrer"
          >
              SCREAM N SHOUT
          </a>
        </div>
        </section>
      </header>
    </div>
  );
}



export default App;
