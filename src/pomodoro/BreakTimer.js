import React from "react";
import converterFunc from "./converterFunc";

function BreakTimer({ breakTime, setBreakTime, playPauseCounter }) {
  const handleTimeChange = (event) => {
    const button = event.target
    if (playPauseCounter) return;
    if (button.id === "increase") {
      if ((breakTime+60) > 900) return;
      setBreakTime((current) => current + 60);
    } else {
      if ((breakTime-60) < 60) return;
      setBreakTime((current) => current - 60);
    };
  }
  function disabled(){
    if (playPauseCounter) return "d-none";
  }
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-break">
        Break Duration: {converterFunc(breakTime)}
      </span>
      <div className="input-group-append">
        <button
          type="button"
          name="break"
          id="decrease"
          value={breakTime}
          onClick={handleTimeChange}
          className={`btn btn-secondary ${disabled()}`}
          data-testid="decrease-break"
        >
          <span name="break" id="decrease" className="oi oi-minus" />
        </button>
        <button
          type="button"
          name="break"
          id="increase"
          value={breakTime}
          onClick={handleTimeChange}
          className={`btn btn-secondary ${disabled()}`}
          data-testid="increase-break"
        >
          <span name="break" id="increase" className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}

export default BreakTimer;
