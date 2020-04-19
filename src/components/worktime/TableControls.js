import React from "react";
import styled, { css } from "styled-components";
import Checkbox from "../common/Checkbox";

function TableControls() {
  return (
    <TableControlsBlock>
      <Checkbox date="all" />
      <Input type="time" placeholder="시작시간" />~<Input type="time" placeholder="종료시간" />
      <Button color="darkgray">일괄변경</Button>
      <Button color="lightcoral">삭제</Button>
    </TableControlsBlock>
  );
}

const TableControlsBlock = styled.div`
  background: #eee;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 1.75rem;
  border-bottom: 1px solid lightgray;
`;

const Input = styled.input`
  height: 2rem;
  margin: 0 1rem;
  padding: 0 0.5rem;
  border-radius: 4px;
  border: 1px solid lightgray;
  outline: none;

  &:invalid {
    &:before {
      color: grey;
      content: attr(placeholder);
      padding-left: 10px;
      pointer-events: none;
      position: absolute;
      left: 20px;
    }
  }

  &:valid {
    &:focus &:active {
      &:before {
        display: none;
      }
    }
  }
`;

const Button = styled.button`
  background: white;
  border-radius: 4px;
  height: 2rem;
  cursor: pointer;
  margin-right: 1rem;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
      border: 1px solid ${props.color};
      &:hover {
        background: ${props.color};
        color: white;
      }
    `}
`;

export default TableControls;
