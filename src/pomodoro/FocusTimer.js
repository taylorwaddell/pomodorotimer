import React from "react";
import converterFunc from "./converterFunc";

/* 
interval = 300;
max = 3600;
min = 300;
*/

function FocusTimer({ setFocusTime, focusTime, playPauseCounter, setTimer }) {
  const handleTimeChange = (event) => {
    if (playPauseCounter) return;
    const button = event.target;
    if (button.id === "increase") {
      if (focusTime + 300 > 3600) return;
      setFocusTime((current) => current + 300);
    } else {
      if (focusTime - 300 < 300) return;
      setFocusTime((current) => current - 300);
    }
  };
  function disabled(){
    if (playPauseCounter) return "d-none";
  }
  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        Focus Duration: {converterFunc(focusTime)}
      </span>
      <div className="input-group-append">
        <button
          type="button"
          onClick={handleTimeChange}
          id="decrease"
          className={`btn btn-secondary ${disabled()}`}
          data-testid="decrease-focus"
        >
          <span name="focus" id="decrease" className="oi oi-minus" />
        </button>

        <button
          type="button"
          onClick={handleTimeChange}
          id="increase"
          className={`btn btn-secondary ${disabled()}`}
          data-testid="increase-focus"
        >
          <span name="focus" id="increase" className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}

export default FocusTimer;
