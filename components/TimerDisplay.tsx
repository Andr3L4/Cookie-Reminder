
import React from 'react';

interface TimerDisplayProps {
  seconds: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ seconds }) => {
  const formatTime = (timeInSeconds: number): string => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const secs = timeInSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, '0');

    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  };

  return (
    <div className="font-mono text-6xl md:text-8xl tracking-widest text-stone-800">
      {formatTime(seconds)}
    </div>
  );
};

export default TimerDisplay;
