function sessionLoop(
  timer,
  setTimer,
  isFocusSession,
  setIsFocusSession,
  breakTime,
  focusTime,
  setStyle,
  setStyleInterval
) {
  if (timer === 0) {
    new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
    if (isFocusSession) {
      setTimer(() => breakTime);
      setStyleInterval(() => breakTime);
    } else {
      setTimer(() => focusTime);
      setStyleInterval(() => focusTime);
    }
    setIsFocusSession((prev) => !prev);
    setStyle(() => 0);
  }
}

export default sessionLoop;
