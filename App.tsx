import React, { useState, useEffect, useCallback } from 'react';
import { FOUR_HOURS_IN_SECONDS } from './constants';
import { CookieState } from './types';
import Button from './components/Button';
import TimerDisplay from './components/TimerDisplay';
import CookieArt from './components/CookieArt';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(FOUR_HOURS_IN_SECONDS);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    // FIX: Replaced NodeJS.Timeout with ReturnType<typeof setInterval> for browser compatibility.
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      setIsFinished(true);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, timeLeft]);

  const handleStart = useCallback(() => {
    if (isFinished) {
      setIsFinished(false);
      setTimeLeft(FOUR_HOURS_IN_SECONDS);
    }
    setIsActive(true);
  }, [isFinished]);

  const handleReset = useCallback(() => {
    setIsActive(false);
    setIsFinished(false);
    setTimeLeft(FOUR_HOURS_IN_SECONDS);
  }, []);
  
  const getCookieState = (): CookieState => {
    if (isFinished) return CookieState.FINISHED;
    if (isActive) return CookieState.WAITING;
    return CookieState.IDLE;
  }

  return (
    <main className="bg-[#FFF5E1] min-h-screen w-full flex flex-col items-center justify-center p-4 text-center text-stone-900">
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-2xl flex flex-col items-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 tracking-tight">
          lembrete para comer
        </h1>
        <p className="text-lg text-stone-600 max-w-md">
          Tiago vai comer as bolachas, senão desmaias
        </p>

        <CookieArt state={getCookieState()} />

        {isFinished ? (
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-600">Time's Up!</h2>
            <p className="text-xl">Go eat your cookies! You've earned it!</p>
          </div>
        ) : (
          <TimerDisplay seconds={timeLeft} />
        )}

        <div className="flex space-x-4 pt-4">
          {!isActive && (
            <Button onClick={handleStart} variant="primary">
              {isFinished ? 'Start New Batch!' : 'Start Timer'}
            </Button>
          )}
          
          {(isActive || isFinished) && (
            <Button onClick={handleReset} variant="secondary">
              Reset
            </Button>
          )}
        </div>
      </div>
      <footer className="absolute bottom-4 text-stone-500 text-sm">
        Made with 🍪 for cookie lovers.
      </footer>
    </main>
  );
};

export default App;