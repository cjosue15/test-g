import React, { useEffect, useState } from 'react';
import './styles/Timer.css';

function Timer(props) {
  const { seconds, minutes, callBackTimer, step } = props;

  const [secondState, setSecondState] = useState({ seconds });
  const [minuteState, setminuteState] = useState({ minutes });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (secondState.seconds > 0) {
        setSecondState({
          seconds: secondState.seconds - 1
        });
      }

      if (secondState.seconds === 0) {
        if (minuteState.minutes === 0) {
          callBackTimer(secondState.seconds, minuteState.minutes, step);
          clearInterval(intervalId);
        } else {
          setminuteState({
            minutes: minuteState.minutes - 1
          });

          setSecondState({
            seconds: 59
          });
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [minuteState, secondState, callBackTimer, step]);

  return (
    <div
      className='Timer'
      style={{
        backgroundColor: minuteState.minutes > 0 ? '#029c3d' : '#f00'
      }}
    >
      Tiempo restante: {minuteState.minutes}:
      {secondState.seconds < 10
        ? `0${secondState.seconds}`
        : secondState.seconds}
    </div>
  );
}

export default Timer;
