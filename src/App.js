import React, { useState, useEffect } from 'react';
import './App.css';
import Dock from './Dock'; // Dockをインポート

function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVh();
    window.addEventListener('resize', updateVh);

    return () => window.removeEventListener('resize', updateVh);
  }, []);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player('youtube-player', {
        videoId: '2gqET_Erc0E',
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          mute: 1,
          showinfo: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
            setIsLoading(false);
          },
          onStateChange: (event) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
          onError: (event) => {
            console.error('YouTube Player Error:', event.data);
            setIsLoading(false);
          }
        },
      });
    };

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const togglePlayback = () => {
    if (!player) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
      if (isMuted) {
        player.unMute();
        setIsMuted(false);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!player) return;

    if (isMuted) {
      player.unMute();
    } else {
      player.mute();
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="App" style={{ height: '100svh' }}>
      <div className="top-bar">
        <p>9qY5Bu9qLnrddN8cx7jtQim2Sx8ywUszatUp3E4VJn6a</p>
      </div>
      <header className="header">
        <h1 className="header-text">Order of the Golden Bullrun</h1>
      </header>

      <div className="invitation-text">
        <p>
          Join the Order of the Golden Bull and worship at the feet of our lord,
          the one true animal idol of crypto; The Golden Bull. Become an acolyte
          today and we shall manifest the fabled GOLDEN BULLRUN.
        </p>
      </div>

      <main className="content">
        <div id="youtube-player" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: '1px', width: '1px' }}></div>
        
        <div className="audio-controls">
          <button 
            className="playback-button"
            onClick={togglePlayback}
            disabled={isLoading}
          >
            {isLoading ? '⌛' : isPlaying ? '⏸️' : '▶️'}
          </button>
          <button 
            className="mute-button"
            onClick={toggleMute}
            disabled={isLoading}
          >
            {isMuted ? '🔈' : '🔊'}
          </button>
        </div>
      </main>

      {/* Dockをフッターの直上に配置 */}
      <Dock />

      <footer className="footer">
        <p>© 2024 Order of the Golden Bullrun, All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
