import React from 'react';
import styled, { css } from 'styled-components';
import ScheduleRowDate from './ScheduleRowDate';
import ScheduleRowTime from './ScheduleRowTime';

function ScheduleSelector({ dates }) {
  return (
    <Wrapper>
      <Grid>
        <Row>
          <ScheduleRowDate />
          <ScheduleRowTime />
        </Row>
        {dates.map((date, index) => {
          const { day } = date;
          return (
            <Row key={index} day={day}>
              <ScheduleRowDate thisDate={date} />
              <ScheduleRowTime thisDate={date} />
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
