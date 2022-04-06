import React, { useEffect, useRef, useState } from 'react'

import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import { BiReset } from 'react-icons/bi'
import 'react-circular-progressbar/dist/styles.css';

import '../styles/Pomodoro.css'

const Pomodoro = ({ clock }) => {
  const [initialTime] = useState({
    minute: +clock,
    second: 59
  });
  const [minutes, setMinutes] = useState(initialTime.minute - 1);
  const [seconds, setSeconds] = useState(59);
  const [pause, setPause] = useState(true);

  let timer = useRef();
  useEffect(() => {
    if (!pause) {
      timer.current = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          reset()
        } else {
          setSeconds(seconds - 1);
          if (seconds === 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        }
      }, 1000);
    }
    return () => clearInterval(timer.current);
  });

  const reset = () => {
    setMinutes(initialTime.minute - 1);

    setSeconds(initialTime.second);
    setPause(true);
  };

  return (
    <>
      <div style={{ width: 300, height: 300 }}>
        <CircularProgressbarWithChildren
          value={minutes * 60 + seconds}
          minValue={0}
          strokeWidth={10}
          maxValue={clock * 60}
          styles={buildStyles({
            strokeLinecap: 'round',
            textSize: '0.75rem',
            pathTransitionDuration: 1,
            pathColor: `${(minutes * 60 + seconds) < ((clock * 60) / 4) ? 'var(--red)' : 'var(--primary-color)'}`,
            textColor: 'var(--primary-color)',
            tailColor: 'var(--gray-2)',
          })}
        >
          <h1 className='clock'>{`${minutes}m : ${seconds < 10 ? '0' : ''}${seconds}s`}</h1>
          <h3 className='time'>Out of {clock} minutes</h3>
        </CircularProgressbarWithChildren>
      </div>

      <div className="control-buttons flex align-center flex-col justify-between">
        <div className="play-pause flex align-center">
          <button className='play flex align-center' onClick={() => setPause(false)}>
            <AiFillPlayCircle /><span>Play</span>
          </button>
          <button className='pause flex align-center' onClick={() => setPause(true)}>
            <AiFillPauseCircle /><span>Pause</span>
          </button>
        </div>
        <div>
          <button className='reset flex align-center' onClick={reset}>
            <BiReset /><span>Reset</span>
          </button>
        </div>
      </div>

    </>

  )
}

export default Pomodoro