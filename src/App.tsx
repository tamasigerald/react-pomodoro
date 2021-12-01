import React, { useEffect, useState } from 'react';
import getTime from './helpers/getTime';


type interval = NodeJS.Timeout;

const App: React.FC = () => {

  const [ sessionTimer, setSessionTimer ] = useState<number>(60)
  const [ breakTimer, setBreakTimer ] = useState<number>(6);
  const [ timer, setTimer ] = useState<number>(sessionTimer);
  const [ isActive, setIsActive ] = useState<boolean>(false);
  const [ isBreak, setIsBreak ] = useState<boolean>(false);
  const [ isSession, setIsSession ] = useState<boolean>(false);

  const resetAll = () => {
    setIsActive(false);
    setIsSession(false);
    setIsBreak(false);
  }




  useEffect(() => {
    if (isBreak || isSession) {
      setIsActive(true);
    }
    if (isBreak) {
      setTimer(breakTimer);
    }
    if (isSession) {
      setTimer(sessionTimer);
    }
  }, [isSession, isBreak, breakTimer, sessionTimer])

  useEffect(() => {
    let intervalID: interval;
    if (isActive && timer > 0) {
      intervalID = setInterval(() => setTimer(value => value - 1), 1000)
    }
    return () => clearInterval(intervalID);
  }, [isActive, timer])

  return (
    <div className="container">
      <div className="timer">
        <div className="timer__clock">{getTime(timer)}</div>
        <div className="timer__circle"></div>
      </div>
      <div className="menu">
        <div>
          <button onClick={() => setSessionTimer(value => value - 60)}>-</button>
          <div>{getTime(sessionTimer)}</div>
          <button onClick={() => setSessionTimer(value => value + 60)}>+</button>
        </div>
        <div>
          <button>-</button>
          <div>{getTime(breakTimer)}</div>
          <button>+</button>
        </div>
      </div>
      <div className="menu">
        <div>
          <button onClick={() => setIsSession(true)}>start</button>
          <button onClick={() => resetAll()}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
