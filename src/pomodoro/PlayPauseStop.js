import React from "react";
import classNames from "../utils/class-names";

function PlayPauseStop({
  isTimerRunning,
  setIsTimerRunning,
  timer,
  focusTime,
  breakTime,
  setTimer,
  isFocusSession,
  setIsFocusSession,
  setStyle,
  playPauseCounter,
  setPlayPauseCounter,
  setStyleInterval,
}) {
  function playPause() {
    if (!playPauseCounter) {
      setTimer(() => focusTime);
      setStyleInterval(() => focusTime);
    }
    setIsTimerRunning((prevState) => !prevState);
    setPlayPauseCounter((current) => current + 1);
  }
  function stopButton() {
    const checkSession = isFocusSession ? focusTime : breakTime;
    if (playPauseCounter) {
      setIsTimerRunning(() => false);
      setTimer(() => focusTime);
      setIsFocusSession(() => true);
      setStyle(() => 0);
      setPlayPauseCounter(() => 0);
      setStyleInterval(() => focusTime);
    }
  }
  function disabled(){
    if (!playPauseCounter) return "d-none"
  }
  return (
    <div
      className="btn-group btn-group-lg mb-2"
      role="group"
      aria-label="Timer controls"
    >
      <button
        type="button"
        className="btn btn-primary"
        data-testid="play-pause"
        title="Start or pause timer"
        onClick={playPause}
      >
        <span
          className={classNames({
            oi: true,
            "oi-media-play": !isTimerRunning,
            "oi-media-pause": isTimerRunning,
          })}
        />
      </button>
      <button
        type="button"
        onClick={stopButton}
        className={`btn btn-secondary ${disabled()}`}
        title="Stop the session"
        
      >
        <span className="oi oi-media-stop" />
      </button>
    </div>
  );
}

export default PlayPauseStop;
