import React, { useEffect, useState } from 'react';

export default function TestPage() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  return (
    <div className="flex justify-center">
      <span className="text-xl text-purple-800 mr-4">
        Counter:
      </span>
      {' '}
      <span className="text-xl text-purple-800">
        {timer}
      </span>
    </div>
  );
}
