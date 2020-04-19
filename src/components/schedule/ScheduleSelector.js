import React from 'react';
import styled, { css } from 'styled-components';
import ScheduleRowDate from './ScheduleRowDate';
import ScheduleRowTime from './ScheduleRowTime';

function ScheduleSelector({ dates, schedules, onSetWorktime }) {
  return (
    <Wrapper>
      <Grid>
        <Row>
          <ScheduleRowDate />
          <ScheduleRowTime />
        </Row>
        {dates.map((thisDate, index) => {
          const { day, date } = thisDate;
          // 해당 날짜 스케쥴
          const schedule = Object.keys(schedules).find(
            schedule => schedule.split('-')[2] === date.toString()
          );
          const worktime = schedule ? schedules[schedule].worktime : [];
          const vacationtime = schedule ? schedules[schedule].vacationtime : [];
          return (
            <Row key={index} day={day}>
              <ScheduleRowDate thisDate={thisDate} />
              <ScheduleRowTime
                thisDate={thisDate}
                worktime={worktime}
                vacationtime={vacationtime}
                onSetWorktime={onSetWorktime}
              />
            </Row>
          );
        })}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  user-select: none;
`;

const Grid = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  ${props =>
    props.day === '일' &&
    css`
      margin-bottom: 2rem;
    `}
`;

export default ScheduleSelector;
