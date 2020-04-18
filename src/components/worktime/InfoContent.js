import React from "react";
import styled from "styled-components";

function InfoTimeContent({ title, boldTitle, value, maximumValue }) {
  return (
    <ContentBlock>
      <ContentTitle>
        {boldTitle && <b>{boldTitle}</b>}
        {title}
      </ContentTitle>
      <ContentValue>
        {value}
        {maximumValue && <span> / {maximumValue}</span>}
      </ContentValue>
    </ContentBlock>
  );
}

const ContentBlock = styled.div`
  margin-right: 2rem;
  &:last-of-type {
    margin-right: 0;
  }
`;

const ContentTitle = styled.p`
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;

const ContentValue = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
  span {
    font-size: 1.25rem;
    color: darkgray;
  }
`;

export default InfoTimeContent;
