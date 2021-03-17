import React from "react";
import ProgressBar from "./ProgressBar";
import converterFunc from "./converterFunc";
import BreakTimer from "./BreakTimer";

function WhenPlaying({
  focusTime,
  timer,
  style,
  isFocusSession,
  playPauseCounter,
  breakTime,
}) {
  function mode() {
    return isFocusSession ? "Focusing" : "On Break";
  }
  function displayPaused() {
    if (playPauseCounter % 2 == 0) return <h1>PAUSED</h1>;
  }
  function modeTimer() {
    return isFocusSession ? converterFunc(focusTime) : converterFunc(breakTime);
  }
  if (playPauseCounter) {
    return (
      <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {mode()} for {modeTimer()} minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {converterFunc(timer)} remaining
            </p>
            {displayPaused()}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <ProgressBar style={style} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default WhenPlaying;
