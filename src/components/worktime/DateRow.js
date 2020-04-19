import React from "react";
import Checkbox from "../common/Checkbox";
import styled, { css } from "styled-components";
import { FaLock } from "react-icons/fa";

function DateRow({ thisDate }) {
  if (!thisDate)
    return (
      <DateRowBlock>
        <Checkbox date={1} />
        <p>날짜</p>
        <p>총 근무시간</p>
        <p>휴가시간</p>
        <p>등록</p>
      </DateRowBlock>
    );
  const { date, day, totalWorkingHours, vacationHours } = thisDate;
  return (
    <DateRowBlock>
      <Checkbox date={date} />
      <DateText day={day}>
        {date}일({day})
      </DateText>
      <p>{totalWorkingHours === 0 ? "-" : totalWorkingHours}</p>
      <p>{vacationHours === 0 ? "-" : vacationHours}</p>
      <p>{day === "토" || day === "일" || <FaLock />}</p>
    </DateRowBlock>
  );
}

const DateRowBlock = styled.div`
  border-bottom: 1px solid lightgray;
  margin-right: 1rem;
  width: 400px;
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 0 1.75rem;
  font-size: 0.875rem;

  & > *:not(:first-child) {
    flex: 0 0 calc((400px - 3.5rem) / 4);
    text-align: center;
  }
`;

const DateText = styled.p`
  ${(props) =>
    props.day === "토" &&
    css`
      color: cornflowerblue;
    `}

  ${(props) =>
    props.day === "일" &&
    css`
      color: salmon;
    `}
`;

export default DateRow;
