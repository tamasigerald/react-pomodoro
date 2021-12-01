import { useEffect, useState } from "react";
import { getHours } from "./helpers/getTime";


function App() {

  const [ timer, setTimer ] = useState(6);
  const [ isActive, setIsActive ] = useState(false);

  useEffect(() => {
    let intervalID;

    if (isActive && timer > 0) {
      intervalID = setInterval(() => setTimer(timer - 1), 1000)
    }

    return () => clearInterval(intervalID);
  }, [isActive, timer])

  return (
    <div className="container">
      <div className="timer">
        <div className="timer__clock">{getHours(timer)}</div>
        <div className="timer__circle"></div>
        <button onClick={() => setIsActive(!isActive)}>start</button>
      </div>
    </div>
  );
}

export default App;
