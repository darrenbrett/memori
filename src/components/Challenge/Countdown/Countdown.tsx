import React, { useState, useEffect, Fragment } from "react";
import "./Countdown.css";
import { IonAlert } from "@ionic/react";
import { useHistory } from "react-router";

const Countdown: React.FC<Timer> = (props) => {
  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    minutes: props?.minutes || 1,
    seconds: props?.seconds || 0,
  });

  const history = useHistory();

  let expired: boolean = false;

  if (time.minutes === 0 && time.seconds === 0) {
    expired = true;
  }

  const tick = () => {
    if (over) {
      console.log("Time expired!");
    }
    if (time.minutes === 0 && time.seconds === 0) setOver(true);
    else if (time.minutes === 0 && time.seconds === 0)
      setTime({
        minutes: 59,
        seconds: 59,
      });
    else if (time.seconds === 0)
      setTime({
        minutes: time.minutes - 1,
        seconds: 59,
      });
    else
      setTime({
        minutes: time.minutes,
        seconds: time.seconds - 1,
      });
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <Fragment>
      <IonAlert
        isOpen={expired}
        message={"Time has expired!"}
        onDidDismiss={() => history.push("/questions")}
        buttons={["OK"]}
      ></IonAlert>
      <span className="timer">
        {!over &&
          ` ${time.minutes
            .toString()
            .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}
      </span>
      <span>{over && " Time's up!"}</span>
    </Fragment>
  );
};

export default Countdown;

export interface Timer {
  minutes?: number;
  seconds?: number;
}
