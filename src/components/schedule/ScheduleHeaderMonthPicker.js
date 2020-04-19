import React, { useRef } from 'react';
import Picker from 'react-month-picker';
import 'react-month-picker/css/month-picker.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import styled from 'styled-components';

function ScheduleHeaderMonthPicker({ year, month, handleMonthChange }) {
  const pickerLang = {
    months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  };

  const onClickMonthBox = () => {
    pickAMonth.current.show();
  };

  const pickAMonth = useRef(null);
  return (
    <Picker
      ref={pickAMonth}
      years={[year - 2, year - 1, year, year + 1, year + 2]}
      value={{ year, month }}
      lang={pickerLang.months}
      onDismiss={handleMonthChange}
    >
      <MonthText>
        <p>
          {year}.{month < 10 ? `0${month}` : month}
        </p>
        <div onClick={onClickMonthBox}>
          <MdKeyboardArrowDown />
        </div>
      </MonthText>
    </Picker>
  );
}

const MonthText = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 2rem;
    line-height: 2rem;
  }
  & > div {
    font-size: 1.5rem;
    width: 2rem;
    height: 2rem;
    margin-left: 0.5rem;
    cursor: pointer;
    border: 1px solid lightgray;
    border-radius: 50%;
    color: dimgray;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: black;
    }
  }
`;

export default ScheduleHeaderMonthPicker;
