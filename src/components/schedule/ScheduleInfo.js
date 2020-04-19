import React from 'react';
import ScheduleInfoContent from './ScheduleInfoContent';
import styled from 'styled-components';

function ScheduleInfo() {
  return (
    <div>
      <ContentWrapper>
        <ScheduleInfoContent
          boldTitle="말일까지 총 예정"
          title=" 근무시간"
          value="160"
          maximumValue="160"
        />
      </ContentWrapper>
      <ContentWrapper>
        <ScheduleInfoContent title="실 근무시간" value="160" />
        <ScheduleInfoContent title="휴가시간" value="0" />
        <ScheduleInfoContent title="연장근무시간" value="0" maximumValue="51" />
      </ContentWrapper>
    </div>
  );
}

const ContentWrapper = styled.div`
  display: flex;
`;

export default ScheduleInfo;
