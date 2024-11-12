import React, { useEffect, useState } from 'react';
import "./App.css"
import gsap from 'gsap'

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    if (!timer) setTimer(setInterval(() => setTime(t => t + 1), 1000));
  };

  const stop = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const reset = () => {
    clearInterval(timer);
    setTime(0);
    setTimer(null);
  };

  useEffect(()=>{
    gsap.to(".watchtime",{
      duration:2,
      delay:1,
      rotate:360,
    },{scope:".watchtime"})
  
  })


  
  return (
    <>
      <div className='watch'>
        <div className='watchtime'>
          <h1>Stopwatch</h1>
          <h2>{`${String(Math.floor(time / 60)).padStart(2, '0')}:${String(time % 60).padStart(2, '0')}`}</h2>
          <div className="btn">
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
