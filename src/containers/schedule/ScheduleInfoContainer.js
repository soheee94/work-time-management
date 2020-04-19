import React from 'react';
import ScheduleInfo from '../../components/schedule/ScheduleInfo';
import { useSelector } from 'react-redux';
import { getToday } from '../../modules/date';

function ScheduleInfoContainer() {
  const { id } = useSelector(state => state.auth.profile);
  const schedule = useSelector(state => state.schedule)[id];

  const { year, month } = useSelector(state => state.date);

  // 주말 제외한 평일 수
  function getWorkingDays() {
    var result = 0;
    const numDates = new Date(year, month, 0).getDate();
    const startdate = new Date(`${year}-${month}-1`);
    const endDate = new Date(`${year}-${month}-${numDates}`);
    while (startdate <= endDate) {
      var weekDay = startdate.getDay();
      if (weekDay !== 0 && weekDay !== 6) result++;

      startdate.setDate(startdate.getDate() + 1);
    }

    return result;
  }

  // 선택한 월 근무/휴가 시간 조회
  const thisMonthSchedule = Object.keys(schedule).filter(schedule =>
    schedule.includes(`${year}-${month}`)
  );

  // 연장 근무
  let overtimework = 0;
  // 실 근무시간
  let actualWorkingHours = 0;
  const today = getToday();

  // 등록 된 근무 시간 계산
  const workingHours = thisMonthSchedule.reduce((acc, current) => {
    const workingHour = schedule[current].worktime.length / 2;
    // 연장 근무 계산 (하루에 8시간 이상 근무했을 경우)
    if (workingHour > 8) overtimework += workingHour - 8;
    // 실 근무시간 계산 (비교 기준은 오늘)
    if (new Date(current) <= new Date(today)) actualWorkingHours += workingHour;
    return acc + workingHour;
  }, 0);

  // 등록 된 휴가 시간 계산
  const vactionHours = thisMonthSchedule.reduce(
    (acc, current) => acc + schedule[current].vacationtime.length / 2,
    0
  );

  return (
    <ScheduleInfo
      totalWorkingHours={getWorkingDays() * 8}
      workingHours={workingHours}
      actualWorkingHours={actualWorkingHours}
      vacationHours={vactionHours}
      overtimework={overtimework}
    />
  );
}

export default ScheduleInfoContainer;
