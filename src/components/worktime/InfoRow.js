import React from "react";
import InfoContent from "./InfoContent";
import styled from "styled-components";

function InfoRow() {
  return (
    <div>
      <ContentWrapper>
        <InfoContent
          boldTitle="말일까지 총 예정"
          title=" 근무시간"
          value="160"
          maximumValue="160"
        />
      </ContentWrapper>
      <ContentWrapper>
        <InfoContent title="실 근무시간" value="160" />
        <InfoContent title="휴가시간" value="0" />
        <InfoContent title="연장근무시간" value="0" maximumValue="51" />
      </ContentWrapper>
    </div>
  );
}

const ContentWrapper = styled.div`
  display: flex;
`;

export default InfoRow;
