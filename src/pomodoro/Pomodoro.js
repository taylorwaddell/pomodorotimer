import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import FocusTimer from "./FocusTimer";
import BreakTimer from "./BreakTimer";
import WhenPlaying from "./WhenPlaying";
import PlayPauseStop from "./PlayPauseStop";
import sessionLoop from "./sessionLoop";

function Pomodoro() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timer, setTimer] = useState(1500);
  const [focusTime, setFocusTime] = useState(1500);
  const [breakTime, setBreakTime] = useState(300);
  const [style, setStyle] = useState(0);
  const [isFocusSession, setIsFocusSession] = useState(true);
  const [playPauseCounter, setPlayPauseCounter] = useState(0);
  const [styleInterval, setStyleInterval] = useState(0);

  useInterval(
    () => {
      setTimer((current) => current - 1);
      setStyle((style) => style + 100/styleInterval);
      console.log(style);
      sessionLoop(timer, setTimer, isFocusSession, setIsFocusSession, breakTime, focusTime, setStyle, setStyleInterval);
    },
    isTimerRunning ? 1000 : null
  );

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <FocusTimer setFocusTime={setFocusTime} focusTime={focusTime} playPauseCounter={playPauseCounter} setTimer={setTimer} />
        </div>
        <div className="col">
          <div className="float-right">
            <BreakTimer setBreakTime={setBreakTime} breakTime={breakTime} playPauseCounter={playPauseCounter} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <PlayPauseStop
            isTimerRunning={isTimerRunning}
            setIsTimerRunning={setIsTimerRunning}
            timer={timer}
            focusTime={focusTime}
            breakTime={breakTime}
            setTimer={setTimer}
            isFocusSession={isFocusSession}
            setIsFocusSession={setIsFocusSession}
            setStyle={setStyle}
            playPauseCounter={playPauseCounter}
            setPlayPauseCounter={setPlayPauseCounter}
            setStyleInterval={setStyleInterval}
            
          />
        </div>
      </div>
      <WhenPlaying
        playPauseCounter={playPauseCounter}
        focusTime={focusTime}
        timer={timer}
        style={style}
        isFocusSession={isFocusSession}
        breakTime={breakTime}
      />
    </div>
  );
}

export default Pomodoro;
