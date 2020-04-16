import React from "react";
import WorkTimeHeaderContainer from "../containers/WorkTimeHeaderContainer";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../modules/auth";
import styled from "styled-components";

function WorkTimePage({ history }) {
  const profile_session = JSON.parse(sessionStorage.getItem("profile"));
  const profile_store = useSelector(state => state.auth.profile);
  const dispatch = useDispatch();
  if (profile_session === null) {
    history.push("/login");
  } else if (!profile_store) {
    dispatch(loginSuccess(profile_session));
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
  }
`;

export default WorkTimePage;
