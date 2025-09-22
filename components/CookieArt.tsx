
import React from 'react';
import { CookieState } from '../types';

interface CookieArtProps {
  state: CookieState;
}

const CookieArt: React.FC<CookieArtProps> = ({ state }) => {
  const getArt = () => {
    switch (state) {
      case CookieState.FINISHED:
        return (
          <div className="relative w-48 h-48 animate-bounce">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M 50,5 A 45,45 0 1 1 50,95 A 45,45 0 1 1 50,5 Z" fill="#D2A679"/>
                {/* Bite Mark */}
                <path d="M 70 10 A 25 25 0 0 0 50 25 A 15 15 0 0 0 70 10" fill="#FFF5E1"/>
                <circle cx="30" cy="30" r="5" fill="#5D4037" />
                <circle cx="65" cy="65" r="7" fill="#5D4037" />
                <circle cx="40" cy="70" r="4" fill="#5D4037" />
                <circle cx="35" cy="50" r="6" fill="#5D4037" />
            </svg>
             <p className="absolute -top-4 -right-4 text-4xl">😋</p>
          </div>
        );
      case CookieState.WAITING:
        return (
          <div className="relative w-48 h-48 animate-pulse">
            <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M 50,5 A 45,45 0 1 1 50,95 A 45,45 0 1 1 50,5 Z" fill="#D2A679"/>
                <circle cx="30" cy="30" r="5" fill="#5D4037" />
                <circle cx="70" cy="25" r="6" fill="#5D4037" />
                <circle cx="50" cy="50" r="8" fill="#5D4037" />
                <circle cx="65" cy="65" r="7" fill="#5D4037" />
                <circle cx="40" cy="70" r="4" fill="#5D4037" />
                <circle cx="35" cy="50" r="6" fill="#5D4037" />
            </svg>
            <p className="absolute -top-4 -right-4 text-4xl">⏳</p>
          </div>
        );
      case CookieState.IDLE:
      default:
        return (
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full transform transition-transform duration-300 hover:scale-110">
                <path d="M 50,5 A 45,45 0 1 1 50,95 A 45,45 0 1 1 50,5 Z" fill="#D2A679"/>
                <circle cx="30" cy="30" r="5" fill="#5D4037" />
                <circle cx="70" cy="25" r="6" fill="#5D4037" />
                <circle cx="50" cy="50" r="8" fill="#5D4037" />
                <circle cx="65" cy="65" r="7" fill="#5D4037" />
                <circle cx="40" cy="70" r="4" fill="#5D4037" />
                <circle cx="35" cy="50" r="6" fill="#5D4037" />
            </svg>
            <p className="absolute -top-4 -right-4 text-4xl">🍪</p>
          </div>
        );
    }
  };

  return <div className="my-8">{getArt()}</div>;
};

export default CookieArt;
