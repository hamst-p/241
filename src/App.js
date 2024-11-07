import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <div className="top-bar">
        <p>9qY5Bu9qLnrddN8cx7jtQim2Sx8ywUszatUp3E4VJn6a</p>
      </div>
      <header className="header">
        <h1>Order of the Golden Bull</h1>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
        {isMenuOpen && (
          <nav className="nav-menu">
            <div className="dropdown">
              <button className="dropbtn">Chart</button>
              <div className="dropdown-content">
                <a href="https://dexscreener.com/solana/FkKS7kUJXei5x8E8dBgzpAXoriYbZU8skPKx5Mt6f54q" target="_blank" rel="noopener noreferrer">Dexscreener</a>
                <a href="https://www.dextools.io/app/en/solana/pair-explorer/FkKS7kUJXei5x8E8dBgzpAXoriYbZU8skPKx5Mt6f54q?t=1730870236845" target="_blank" rel="noopener noreferrer">Dextools</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Swap</button>
              <div className="dropdown-content">
                <a href="https://raydium.io/swap/?inputMint=sol&outputMint=9qY5Bu9qLnrddN8cx7jtQim2Sx8ywUszatUp3E4VJn6a" target="_blank" rel="noopener noreferrer">Raydium</a>
                <a href="https://jup.ag/swap/SOL-9qY5Bu9qLnrddN8cx7jtQim2Sx8ywUszatUp3E4VJn6a" target="_blank" rel="noopener noreferrer">Jupiter</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Social</button>
              <div className="dropdown-content">
                <a href="https://x.com/Goldenctosol" target="_blank" rel="noopener noreferrer">X</a>
                <a href="http://t.me/Goldensolcta" target="_blank" rel="noopener noreferrer">Telegram</a>
              </div>
            </div>
          </nav>
        )}
      </header>
      <main className="content">
      </main>
      <div className="invitation-text">
        <p>
          Join the Order of the Golden Bull and worship at the feet of our lord,
          the one true animal idol of crypto; The Golden Bull. Become an acolyte
          today and we shall manifest the fabled GOLDEN BULLRUN.
        </p>
      </div>
      <footer className="footer">
        <p>© 2024-25 Order of the Golden Bull, All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
