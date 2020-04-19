import React, { useState } from 'react';
import styled, { css } from 'styled-components';

function ScheduleRowTime({ thisDate, worktime, vacationtime }) {
  const [state, setState] = useState({
    worktimeState: worktime,
    vacationtimeState: vacationtime,
  });

  const [selectionState, setSelectionState] = useState({
    selectionType: null,
    selectionStart: '',
  });

  const { worktimeState, vacationtimeState } = state;
  const { selectionType, selectionStart } = selectionState;

  const startHandler = (time, disabled) => {
    if (disabled) return;
    const timeSelected = worktimeState.find(worktime => worktime === time);
    setSelectionState({
      ...state,
      selectionType: timeSelected ? 'remove' : 'add',
      selectionStart: time,
    });
  };

  const updateAvailabilityDraft = (selectionEnd, disabled) => {
    if (selectionType === null || selectionStart === null || disabled) return;
    const newDraft = range(selectionStart, selectionEnd);
    if (selectionType === 'add') {
      console.log('add', selectionStart, selectionEnd, newDraft);
      setState({
        ...state,
        worktimeState: worktimeState.concat(newDraft),
      });
    } else if (selectionType === 'remove') {
      console.log('remove', selectionStart, selectionEnd);
      setState({
        ...state,
        worktimeState: worktimeState.filter(worktime => !newDraft.includes(worktime)),
      });
    }
  };

  const endHandler = (time, disabled) => {
    if (selectionType === null || selectionStart === null || disabled) return;
    updateAvailabilityDraft(time, disabled);
    setSelectionState({ ...state, selectionStart: null, selectionType: null });

    // redux 저장 -> 중복 제거
  };

  if (!thisDate)
    return (
      <TimeRowBlock>
        <TimeDelimitedColorBlock color="cornflowerblue">표준</TimeDelimitedColorBlock>
        <TimeDelimitedColorBlock color="lemonchiffon">휴가</TimeDelimitedColorBlock>
      </TimeRowBlock>
    );

  return (
    <TimeRowBlock>
      {renderTimeCell(
        thisDate,
        worktimeState,
        vacationtimeState,
        startHandler,
        updateAvailabilityDraft,
        endHandler
      )}
    </TimeRowBlock>
  );
}

const renderTimeCell = (
  thisDate,
  worktimeState,
  vacationtimeState,
  startHandler,
  updateAvailabilityDraft,
  endHandler
) => {
  const { day } = thisDate;
  const cells = [];
  for (let index = 0; index < 48; index++) {
    const disabled =
      (index >= 0 && index < 12) || (index >= 44 && index <= 48) || day === '토' || day === '일';
    cells.push(
      <TimeCellWrapper
        index={index}
        key={index}
        disabled={disabled}
        onMouseDown={() => startHandler(index, disabled)}
        onMouseEnter={() => updateAvailabilityDraft(index, disabled)}
        onMouseUp={() => endHandler(index, disabled)}
      >
        <TimeCell
          worktimeSelected={worktimeState.includes(index)}
          vacationtimeSelected={vacationtimeState.includes(index)}
        />
      </TimeCellWrapper>
    );
  }
  return cells;
};

function range(start, end) {
  if (start > end) {
    const temp = end;
    end = start;
    start = temp;
  }
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

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
    props.worktimeSelected &&
    css`
      background: cornflowerblue;
      opacity: 0.5;
    `}

  ${props =>
    props.vacationtimeSelected &&
    css`
      background: lemonchiffon;
      opacity: 0.5;
    `}

  &:hover {
    background: cornflowerblue;
    opacity: 0.4;
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
        background: none;
      }
    `}
`;

export default ScheduleRowTime;
