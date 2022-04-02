import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useCountdown = (initialSeconds: number): number => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((left) => left - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (secondsLeft < 0) {
    navigate("/");
  }

  return secondsLeft;
};
