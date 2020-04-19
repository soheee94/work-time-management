import React from 'react';
import styled, { css } from 'styled-components';
import ScheduleRowDate from './ScheduleRowDate';
import ScheduleRowTime from './ScheduleRowTime';

function ScheduleSelector({ dates, schedules }) {
  return (
    <Wrapper>
      <Grid>
        <Row>
          <ScheduleRowDate />
          <ScheduleRowTime />
        </Row>
        {dates.map((thisDate, index) => {
          const { day, date } = thisDate;

          const schedule = schedules.find(
            schedule => schedule.date.split('-')[2] === date.toString()
          );
          const worktime = schedule ? schedule.worktime : [20, 21, 22, 23];
          const vacationtime = schedule ? schedule.vacationtime : [24, 25];
          return (
            <Row key={index} day={day}>
              <ScheduleRowDate thisDate={thisDate} />
              <ScheduleRowTime
                thisDate={thisDate}
                worktime={worktime}
                vacationtime={vacationtime}
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
