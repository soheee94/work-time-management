import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

function ScheduleRowTime({ thisDate, worktime, vacationtime, onSetWorktime }) {
  const [state, setState] = useState({
    worktimeState: worktime && worktime.length > 0 ? worktime : [],
    vacationtimeState: vacationtime,
  });

  const [selectionState, setSelectionState] = useState({
    timeType: null,
    selectionType: null,
    selectionStart: '',
  });

  const { worktimeState, vacationtimeState } = state;
  const { timeType, selectionType, selectionStart } = selectionState;

  // onMouseDown 시작
  const startHandler = (time, disabled, event) => {
    if (disabled) return;

    // event.button : 0(왼쪽 마우스 클릭 - 근무시간 추가 수정), 2(오른쪽 마우스 클릭 - 휴가시간 추가 수정)
    const type = event.button === 0 ? 'work' : 'vacation';

    // workinghour의 제일 작은 값보다 작을 때, 큰 값보다 클 때
    if (
      type === 'vacation' &&
      (Math.min(...worktimeState) > time || Math.max(...worktimeState) < time)
    ) {
      alert('근무시간의 시작과 끝에 휴가를 등록할 수 없습니다.');
      return;
    }

    // 미리 선택되었는지 여부(있을 경우 '삭제', 없을 경우 '추가')
    const timeSelected =
      type === 'work'
        ? worktimeState.find(worktime => worktime === time)
        : vacationtimeState.find(vacationtime => vacationtime === time);
    setSelectionState({
      ...selectionState,
      timeType: type,
      selectionType: timeSelected ? 'remove' : 'add',
      selectionStart: time,
    });
  };

  // mouse enter, up event
  const updateAvailabilityDraft = (selectionEnd, disabled) => {
    if (selectionType === null || selectionStart === null || disabled) return;
    // drag 요소
    const newDraft = range(selectionStart, selectionEnd);
    if (selectionType === 'add') {
      if (timeType === 'work') {
        setState({
          ...state,
          worktimeState: worktimeState.concat(newDraft),
        });
      } else {
        // 최대 1시간
        if (vacationtimeState.length === 2) {
          alert('더 이상 휴가를 등록할 수 없습니다.');
          return false;
        }
        setState({
          ...state,
          vacationtimeState: vacationtimeState.concat(newDraft),
        });
      }
    } else if (selectionType === 'remove') {
      if (timeType === 'work') {
        setState({
          ...state,
          worktimeState: worktimeState.filter(worktime => !newDraft.includes(worktime)),
        });
      } else {
        setState({
          ...state,
          vacationtimeState: vacationtimeState.filter(
            vacationtime => !newDraft.includes(vacationtime)
          ),
        });
      }
    }
  };

  // onMouseUp
  const endHandler = async (time, disabled) => {
    if (selectionType === null || selectionStart === null || disabled) return;
    updateAvailabilityDraft(time, disabled);
    setSelectionState({ ...selectionState, selectionStart: null, selectionType: null });
  };

  useEffect(() => {
    if (thisDate) {
      onSetWorktime(thisDate.date, [...new Set(worktimeState)], [...new Set(vacationtimeState)]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [worktimeState, vacationtimeState, selectionType]);

  const RenderTimeCell = ({
    thisDate,
    worktimeState,
    vacationtimeState,
    startHandler,
    updateAvailabilityDraft,
    endHandler,
  }) => {
    const { day } = thisDate;
    const cells = [];
    // 시간은 0~24시간 30분 단위로 쪼갬 > 총 48
    for (let index = 0; index < 48; index++) {
      const disabled =
        (index >= 0 && index < 12) || (index >= 44 && index <= 48) || day === '토' || day === '일';
      cells.push(
        <TimeCellWrapper
          index={index}
          key={index}
          disabled={disabled}
          onMouseDown={event => startHandler(index, disabled, event)}
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

  if (!thisDate)
    return (
      <TimeRowBlock>
        <TimeDelimitedColorBlock color="cornflowerblue">표준</TimeDelimitedColorBlock>
        <TimeDelimitedColorBlock color="lemonchiffon">휴가</TimeDelimitedColorBlock>
      </TimeRowBlock>
    );

  return (
    <TimeRowBlock>
      <RenderTimeCell
        thisDate={thisDate}
        worktimeState={worktimeState}
        vacationtimeState={vacationtimeState}
        startHandler={startHandler}
        updateAvailabilityDraft={updateAvailabilityDraft}
        endHandler={endHandler}
      />
    </TimeRowBlock>
  );
}

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
  height: 4rem;
  padding-top: 0.5rem;
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
