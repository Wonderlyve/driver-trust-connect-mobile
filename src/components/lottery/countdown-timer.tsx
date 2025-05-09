
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        onComplete?.();
        return {
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update countdown every second
    const timer = setInterval(() => {
      const timeRemaining = calculateTimeLeft();
      setTimeLeft(timeRemaining);
      
      if (timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className="flex justify-center gap-2 text-center">
      <div className="bg-dtc-blue text-white p-2 rounded-lg w-16">
        <div className="text-xl font-bold">{formatTime(timeLeft.hours)}</div>
        <div className="text-xs">Heures</div>
      </div>
      <div className="bg-dtc-blue text-white p-2 rounded-lg w-16">
        <div className="text-xl font-bold">{formatTime(timeLeft.minutes)}</div>
        <div className="text-xs">Minutes</div>
      </div>
      <div className="bg-dtc-blue text-white p-2 rounded-lg w-16">
        <div className="text-xl font-bold">{formatTime(timeLeft.seconds)}</div>
        <div className="text-xs">Secondes</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
