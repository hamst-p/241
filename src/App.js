import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [playerInitialized, setPlayerInitialized] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVh();
    window.addEventListener('resize', updateVh);

    return () => window.removeEventListener('resize', updateVh);
  }, []);

  const initializePlayer = () => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player('youtube-player', {
        videoId: '2gqET_Erc0E',
        playerVars: {
          playlist: 'PLeYvP-fNbBymBLC8aNufRAZBFy0HFHhbR',
          autoplay: 1,
          controls: 0,
          loop: 1,
          mute: isMuted ? 1 : 0,
          showinfo: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event) => {
            if (isMuted) {
              event.target.mute();
            } else {
              event.target.unMute();
            }
            event.target.playVideo();
          },
        },
      });

      window.youtubePlayer = player;
      setPlayerInitialized(true);
    };
  };

  const toggleMute = () => {
    if (!playerInitialized) {
      initializePlayer(); // プレーヤーが初期化されていない場合、初期化して再生
    } else {
      const player = window.youtubePlayer;
      if (player) {
        if (isMuted) {
          player.unMute();
          player.playVideo();
        } else {
          player.mute();
        }
        setIsMuted(!isMuted);
      }
    }
  };

  return (
    <div className="App" style={{ height: 'calc(var(--vh, 1vh) * 100)' }}>
      <div className="top-bar">
        <p>9qY5Bu9qLnrddN8cx7jtQim2Sx8ywUszatUp3E4VJn6a</p>
      </div>
      <header className="header">
        <h1 className="header-text">Order of the Golden Bull</h1>
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
      <div id="youtube-player" style={{ display: 'none' }}></div> {/* 映像を非表示 */}
      <button className="mute-button" onClick={toggleMute}>
        {isMuted ? '🔈 Unmute' : '🔇 Mute'}
      </button>
    </div>
  );
}

export default App;
