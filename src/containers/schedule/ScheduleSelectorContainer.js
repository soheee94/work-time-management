import React from 'react';
import ScheduleSelectorControl from '../../components/schedule/ScheduleSelectorControl';
import ScheduleSelector from '../../components/schedule/ScheduleSelector';
import { useSelector } from 'react-redux';

function ScheduleSelectorContainer() {
  const schedule = useSelector(state => state.schedule);
  const { id } = useSelector(state => state.auth.profile);
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

  const thisMonthSchedule = schedule[id].filter(schedule =>
    schedule.date.includes(`${thisYear}-${thisMonth}`)
  );

  return (
    <div>
      <ScheduleSelectorControl />
      <ScheduleSelector dates={dates} schedules={thisMonthSchedule} />
    </div>
  );
}

export default ScheduleSelectorContainer;
