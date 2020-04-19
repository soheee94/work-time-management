import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ScheduleHeaderMonthPicker from '../../components/schedule/ScheduleHeaderMonthPicker';
import ScheduleHeaderUserInfo from '../../components/schedule/ScheduleHeaderUserInfo';
import { getToday, changeMonth } from '../../modules/date';
function ScheduleHeaderContainer() {
  const profile = useSelector(state => state.auth.profile);
  const schedule = useSelector(state => state.schedule);
  const { year, month } = useSelector(state => state.date);
  const dispatch = useDispatch();
  if (!profile) return <div>잘못된 접근입니다.</div>;
  if (profile) {
    const { nickname, thumbnail_image } = profile.properties;
    const { email } = profile.kakao_account;
    const { id } = profile;

    const dateformat = getToday();
    const todaySchedule = schedule[id][dateformat].worktime;

    const handleMonthChange = value => {
      dispatch(changeMonth(value));
    };

    return (
      <div>
        <ScheduleHeaderMonthPicker
          year={year}
          month={month}
          handleMonthChange={handleMonthChange}
        />
        <ScheduleHeaderUserInfo
          id={email}
          nickname={nickname}
          thumbnail_image={thumbnail_image}
          todaySchedule={todaySchedule}
        />
      </div>
    );
  }
}

export default ScheduleHeaderContainer;
