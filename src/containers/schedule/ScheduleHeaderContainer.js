import React from 'react';
import { useSelector } from 'react-redux';
import ScheduleHeaderMonthPicker from '../../components/schedule/ScheduleHeaderMonthPicker';
import ScheduleHeaderUserInfo from '../../components/schedule/ScheduleHeaderUserInfo';
function ScheduleHeaderContainer() {
  const profile = useSelector(state => state.auth.profile);
  if (!profile) return <div>잘못된 접근입니다.</div>;
  if (profile) {
    const { nickname, thumbnail_image } = profile.properties;
    const { email } = profile.kakao_account;
    return (
      <div>
        <ScheduleHeaderMonthPicker />
        <ScheduleHeaderUserInfo id={email} nickname={nickname} thumbnail_image={thumbnail_image} />
      </div>
    );
  }
}

export default ScheduleHeaderContainer;
