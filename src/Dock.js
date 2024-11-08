import React from 'react';
import './App.css';

const Dock = () => {
  return (
    <div className="dock">
      <div className="dock-menu">
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/FkKS7kUJXei5x8E8dBgzpAXoriYbZU8skPKx5Mt6f54q?t=1731072588487" target="_blank" rel="noopener noreferrer">
          <img src="dextools.png" alt="Icon 1" className="dock-icon" />
        </a>
        <a href="https://dexscreener.com/solana/FkKS7kUJXei5x8E8dBgzpAXoriYbZU8skPKx5Mt6f54q" target="_blank" rel="noopener noreferrer">
          <img src="dexscreener.png" alt="Icon 2" className="dock-icon" />
        </a>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=9qY5Bu9qLnrddN8cx7jtQim2Sx8ywUszatUp3E4VJn6a" target="_blank" rel="noopener noreferrer">
          <img src="raydium.png" alt="Icon 3" className="dock-icon" />
        </a>
        <a href="https://jup.ag/swap/SOL-9qY5Bu9qLnrddN8cx7jtQim2Sx8ywUszatUp3E4VJn6a" target="_blank" rel="noopener noreferrer">
          <img src="jupiter.png" alt="Icon 4" className="dock-icon" />
        </a>
        <a href="https://x.com/Goldenctosol" target="_blank" rel="noopener noreferrer">
          <img src="x.png" alt="Icon 5" className="dock-icon" />
        </a>
        <a href="http://t.me/Goldensolcta" target="_blank" rel="noopener noreferrer">
          <img src="telegram.png" alt="Icon 6" className="dock-icon" />
        </a>
      </div>
    </div>
  );
};

export default Dock;
