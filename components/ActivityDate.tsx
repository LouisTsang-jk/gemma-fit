import React from "react";
import {RangeCalendar} from "@nextui-org/react";
import {today, getLocalTimeZone} from "@internationalized/date";


export default function App() {
  const [date, setDate] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({weeks: 1}),
  });

  return (
    <RangeCalendar
      aria-label="Date (Invalid on weekends)"
      value={date}
      onChange={setDate}
    />
  );
}
