import React, { useEffect, useState } from 'react';

function Timer(props) {
  const { seconds, minutes } = props;

  const [secondState, setSecondState] = useState({ seconds });
  const [minuteState, setminuteState] = useState({ minutes });

  useEffect(() => {
    const { seconds } = secondState;
    const { minutes } = minuteState;

    const intervalId = setInterval(() => {
      props.callBackTimer(seconds, minutes);

      if (seconds > 0) {
        setSecondState({
          seconds: seconds - 1
        });
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(intervalId);
        } else {
          setminuteState({
            minutes: minutes - 1
          });

          setSecondState({
            seconds: 59
          });
        }
      }
    }, 1000);

    return () => clearInterval(intervalId);
  });

  console.log(secondState);

  return (
    <div>
      {minuteState.minutes === 0 && secondState.seconds === 0 ? (
        <h1>Busted!</h1>
      ) : (
        <h1>
          Time Remaining: {minuteState.minutes}:
          {secondState.seconds < 10
            ? `0${secondState.seconds}`
            : secondState.seconds}
        </h1>
      )}
    </div>
  );
}

export default Timer;
