import React, { useState } from "react";
import { TimeSplit } from "./typings/global";
import { tick, getTwoDaysFromNow } from "./utils/time";
import { useCssHandles } from "vtex.css-handles";

interface CountdownProps {
  targetDate: string;
}

const DEFAULT_TARGET_DATE = getTwoDaysFromNow();
const CSS_HANDLES = ["countdown"];

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  targetDate = DEFAULT_TARGET_DATE,
}) => {
  const handles = useCssHandles(CSS_HANDLES);
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  tick(targetDate, setTime);

  return (
    <div className={`${handles.countdown} db tc c-muted-1`}>
      <h1>{`${timeRemaining.hours}-${timeRemaining.minutes}-${timeRemaining.seconds}`}</h1>
    </div>
  );
};

Countdown.schema = {
  title: "editor.countdown.title",
  description: "editor.countdown.description",
  type: "object",
  properties: {
    targetDate: {
      title: "Data final",
      description: "Data final utilizada no contador",
      type: "string",
      default: null,
    },
  },
};

export default Countdown;
