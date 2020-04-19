import React from 'react';
import styled from 'styled-components';

function Checkbox({ date }) {
  return (
    <CheckboxGroup>
      <input type="checkbox" id={date} />
      <label htmlFor={date}></label>
    </CheckboxGroup>
  );
}

const CheckboxGroup = styled.div`
  display: inline-block;
  input {
    display: none;
    cursor: pointer;
  }
  label {
    position: relative;
    cursor: pointer;
    display: block;
    width: 1rem;
    height: 1rem;
    &:before {
      content: '';
      -webkit-appearance: none;
      background-color: white;
      border: 1px solid lightgray;
      width: inherit;
      height: inherit;
      display: inline-block;
      position: relative;
      vertical-align: top;
      cursor: pointer;
    }
  }

  input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0.4rem;
    width: 4px;
    height: 12px;
    border: solid gray;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export default Checkbox;
