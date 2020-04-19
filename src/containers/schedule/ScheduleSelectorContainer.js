import React, { useState } from 'react';
import ScheduleSelectorControl from '../../components/schedule/ScheduleSelectorControl';
import ScheduleSelector from '../../components/schedule/ScheduleSelector';

function ScheduleSelectorContainer() {
  // const [state, setState] = useState({ schedule: [] });
  // const handleChange = (newSchedule) => setState({ schedule: newSchedule });
  // console.log(state);
  const thisYear = 2020;
  const thisMonth = 4;
  const numDates = new Date(thisYear, thisMonth, 0).getDate();
  const dates = [];
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  for (let date = 1; date <= numDates; date++) {
    dates.push({
      date,
      day: days[new Date(`${thisYear}-${thisMonth}-${date}`).getDay()],
      totalWorkingHours: 0,
      vacationHours: 0,
    });
  }

  return (
    <div>
      <ScheduleSelectorControl />
      <ScheduleSelector dates={dates} />
    </div>
  );
}

export default ScheduleSelectorContainer;
