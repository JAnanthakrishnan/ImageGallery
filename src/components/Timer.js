import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ updatePage }) => {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (isActive === false) {
      console.log(page);
      updatePage(page);
    }
    //eslint-disable-next-line
  }, [page, isActive]);

  function toggle() {
    setIsActive(!isActive);
    setPage((page % 28) + 1);
  }

  useEffect(() => {
    let interval = null;
    if (seconds === 0) {
      setIsActive(false);
      setSeconds(10);
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      {/* <div className="time">{seconds}s</div> */}
      <div className="row">
        <button
          className={` flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 ml-2 rounded ${
            isActive ? "Disabled" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? `Loading in ${seconds}s` : "Countdown"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
