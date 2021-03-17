import React from "react";

function ProgressBar({ style }) {
  return (
    <div
      className="progress-bar"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={`${style}`} // TODO: Increase aria-valuenow as elapsed time increases
      style={{ width: `${style}%` }} // TODO: Increase width % as elapsed time increases
    />
  );
}

export default ProgressBar;
