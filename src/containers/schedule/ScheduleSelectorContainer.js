import React from 'react';
import ScheduleSelectorControl from '../../components/schedule/ScheduleSelectorControl';
import ScheduleSelector from '../../components/schedule/ScheduleSelector';
import { useSelector, useDispatch } from 'react-redux';
import { setWorkTime } from '../../modules/schedule';

function ScheduleSelectorContainer() {
  const dispatch = useDispatch();
  const { id } = useSelector(state => state.auth.profile);
  const schedule = useSelector(state => state.schedule)[id];

  const { year, month } = useSelector(state => state.date);
  const numDates = new Date(year, month, 0).getDate();
  const dates = [];
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  // 해당 날짜의 요일, 근무시간, 휴가 시간을 포함한 배열
  for (let date = 1; date <= numDates; date++) {
    const dateformat = `${year}-${month}-${date}`;
    dates.push({
      date,
      day: days[new Date(dateformat).getDay()],
      totalWorkingHours: schedule[dateformat] ? schedule[dateformat].worktime.length / 2 : 0,
      vacationHours: schedule[dateformat] ? schedule[dateformat].vacationtime.length / 2 : 0,
    });
  }

  // 이번 달 근무 시간
  const thisMonthSchedule = Object.keys(schedule)
    .filter(schedule => schedule.includes(`${year}-${month}`))
    .reduce((obj, key) => {
      obj[key] = schedule[key];
      return obj;
    }, {});

  // 근무시간 변경 시 redux 스토어 및 로컬 스토리지에 저장
  const onSetWorktime = (date, worktime, vacationtime) => {
    const dateformat = `${year}-${month}-${date}`;
    dispatch(
      setWorkTime({
        id,
        date: dateformat,
        worktime,
        vacationtime,
      })
    );
  };

  // 체크 박스 선택
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const handleChangeAllCheckbox = () => {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
  };

  return (
    <div>
      <ScheduleSelectorControl handleChangeAllCheckbox={handleChangeAllCheckbox} />
      <ScheduleSelector dates={dates} schedules={thisMonthSchedule} onSetWorktime={onSetWorktime} />
    </div>
  );
}

export default ScheduleSelectorContainer;
