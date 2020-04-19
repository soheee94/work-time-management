import React from 'react';
import styled, { css } from 'styled-components';

function ScheduleRowTime({ thisDate }) {
  if (!thisDate)
    return (
      <TimeRowBlock>
        <TimeDelimitedColorBlock color="cornflowerblue">표준</TimeDelimitedColorBlock>
        <TimeDelimitedColorBlock color="lemonchiffon">휴가</TimeDelimitedColorBlock>
      </TimeRowBlock>
    );
  return <TimeRowBlock>{renderTimeCell(thisDate)}</TimeRowBlock>;
}

const renderTimeCell = thisDate => {
  const { day } = thisDate;
  const cells = [];
  for (let index = 0; index < 48; index++) {
    const disabled =
      (index >= 0 && index < 12) || (index >= 44 && index <= 48) || day === '토' || day === '일';
    cells.push(
      <TimeCellWrapper index={index} key={index} disabled={disabled}>
        <TimeCell selected={true} />
      </TimeCellWrapper>
    );
  }
  return cells;
};

const TimeDelimitedColorBlock = styled.div`
  width: 50px;
  height: 25px;
  text-align: center;
  align-self: center;
  margin-left: 1rem;
  ${props =>
    props.color &&
    css`
      background: ${props.color};
    `}
`;

const TimeRowBlock = styled.div`
  border-bottom: 1px solid lightgray;
  width: calc(100% - 400px);
  display: flex;
  justify-content: flex-end;
  /* align-items: flex-end; */
  height: 4rem;
  padding-top: 0.5rem;
  /* padding: 0 1.75rem; */
  font-size: 0.875rem;
`;
const TimeCell = styled.div`
  width: 100%;
  height: 50%;

  ${props =>
    props.selected &&
    css`
      /* background: cornflowerblue; */
      /* opacity: 0.5; */
    `}

  &:hover {
    background: aliceblue;
  }
`;
const TimeCellWrapper = styled.div`
  width: calc(100% / 48);
  height: 100%;
  color: gray;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &:nth-of-type(2n) {
    ${TimeCell} {
      border-left: 1px solid lightgray;
    }
  }
  ${props =>
    props.index % 2 === 0 &&
    css`
     border-left: 1px solid lightgray;
      &:before {
        content: '${props => props.index / 2}';
        height : 50%;
      }
    `}

  ${props =>
    props.disabled &&
    css`
      color: #ddd;
      border-color: #ddd;

      &:nth-of-type(2n) {
        ${TimeCell} {
          border-color: #ddd;
        }
      }

      ${TimeCell} {
        pointer-events: none;
      }
    `}
`;

export default ScheduleRowTime;
