import React from "react";
import styled, { css } from "styled-components";
import DateRow from "./DateRow";
import TimeRow from "./TimeRow";

function WorkTimeSelector({ dates }) {
  return (
    <Wrapper>
      <Grid>
        <Row>
          <DateRow />
          <TimeRow />
        </Row>
        {dates.map((date, index) => {
          const { day } = date;
          return (
            <Row key={index} day={day}>
              <DateRow thisDate={date} />
              <TimeRow thisDate={date} />
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
  ${(props) =>
    props.day === "일" &&
    css`
      margin-bottom: 2rem;
    `}
`;

export default WorkTimeSelector;
