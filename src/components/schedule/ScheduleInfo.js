import React from 'react';
import ScheduleInfoContent from './ScheduleInfoContent';
import styled from 'styled-components';

function ScheduleInfo({
  totalWorkingHours,
  actualWorkingHours,
  workingHours,
  vacationHours,
  overtimework,
}) {
  return (
    <div>
      <ContentWrapper>
        <ScheduleInfoContent
          boldTitle="말일까지 총 예정"
          title=" 근무시간"
          value={workingHours}
          maximumValue={totalWorkingHours}
        />
      </ContentWrapper>
      <ContentWrapper>
        <ScheduleInfoContent title="실 근무시간" value={actualWorkingHours} />
        <ScheduleInfoContent title="휴가시간" value={vacationHours} />
        <ScheduleInfoContent title="연장근무시간" value={overtimework} maximumValue="51" />
      </ContentWrapper>
    </div>
  );
}

const ContentWrapper = styled.div`
  display: flex;
`;

export default ScheduleInfo;
