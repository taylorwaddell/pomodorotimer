function converterFunc(timeInSeconds) {
  const sec = parseInt(timeInSeconds, 10); // convert value to number if it's string
  let minutes = Math.floor(sec / 60); // get minutes
  let seconds = sec - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${minutes}:${seconds}`;
}

export default converterFunc;
