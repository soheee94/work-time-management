import React from 'react';
import ScheduleHeaderContainer from '../containers/schedule/ScheduleHeaderContainer';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../modules/auth';
import styled from 'styled-components';
import ScheduleInfoContainer from '../containers/schedule/ScheduleInfoContainer';
import ScheduleSelectorContainer from '../containers/schedule/ScheduleSelectorContainer';
import { getWorkTime } from '../modules/schedule';

function SchedulePage({ history }) {
  const profile_session = JSON.parse(sessionStorage.getItem('profile'));
  const profile_store = useSelector(state => state.auth.profile);
  const dispatch = useDispatch();
  if (profile_session === null) {
    history.push('/login');
  } else if (!profile_store) {
    dispatch(loginSuccess(profile_session));
    return null;
  } else {
    dispatch(getWorkTime());
  }

  return (
    <SchedulePageTemplate>
      <ScheduleHeaderContainer />
      <ScheduleInfoContainer />
      <ScheduleSelectorContainer />
    </SchedulePageTemplate>
  );
}

const SchedulePageTemplate = styled.div`
  width: 100%;
  padding: 2rem;
  & > div:not(:last-of-type) {
    padding: 1.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
  }
`;

export default SchedulePage;
