import React, { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  setTimeout(onTimeout, timeout);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemaining) => prevRemaining - 100);
    }, 100);
  }, []);

  return <progress id="question-time" />;
}
