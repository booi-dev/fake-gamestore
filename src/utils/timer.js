function timer(func, time) {
  let intervalId;

  const startTimer = () => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      func();
    }, time * 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  const resetTimer = (newTimer) => {
    clearInterval(intervalId);
    stopTimer();
    intervalId = setInterval(() => {
      func();
    }, newTimer * 1000);
  };

  return [startTimer, stopTimer, resetTimer];
}

export default timer;