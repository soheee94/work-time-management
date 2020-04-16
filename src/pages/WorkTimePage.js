import React from "react";
import WorkTimeHeaderContainer from "../containers/WorkTimeHeaderContainer";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../modules/auth";
import styled from "styled-components";

function WorkTimePage({ history }) {
  const profile = JSON.parse(sessionStorage.getItem("profile"));
  const dispatch = useDispatch();
  if (profile === null) {
    history.push("/login");
  } else {
    dispatch(loginSuccess(profile));
  }

  return (
    <WorkTimePageTemplate>
      <WorkTimeHeaderContainer />
    </WorkTimePageTemplate>
  );
}

const WorkTimePageTemplate = styled.div`
  width: 100%;
  padding: 2rem;
  & > div {
    padding: 1rem;
  }
`;

export default WorkTimePage;
