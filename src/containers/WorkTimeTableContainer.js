import React, { useState } from "react";
import TableControls from "../components/worktime/TableControls";
import ScheduleSelector from "react-schedule-selector";
import WorkTimeSelector from "../components/worktime/WorkTimeSelector";

function WorkTimeTableContainer() {
  // const [state, setState] = useState({ schedule: [] });
  // const handleChange = (newSchedule) => setState({ schedule: newSchedule });
  // console.log(state);
  const thisYear = 2020;
  const thisMonth = 4;
  const numDays = new Date(thisYear, thisMonth, 0).getDate();
  const dates = [];
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  for (let date = 1; date <= numDays; date++) {
    dates.push({
      date,
      day: days[new Date(`${thisYear}-${thisMonth}-${date}`).getDay()],
      totalWorkingHours: 0,
      vacationHours: 0,
    });
  }

  return (
    <div>
      <TableControls />
      <WorkTimeSelector dates={dates} />
      {/* <ScheduleSelector
        selection={state.schedule}
        numDays={5}
        minTime={8}
        maxTime={22}
        onChange={handleChange}
      /> */}
    </div>
  );
}

export default WorkTimeTableContainer;
