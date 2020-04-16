import React from "react";
import WorkTimeContainer from "../containers/WorkTimeContainer";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../modules/auth";

function WorkTimePage({ history }) {
  const profile = JSON.parse(sessionStorage.getItem("profile"));
  const dispatch = useDispatch();
  if (profile === null) {
    history.push("/login");
  } else {
    dispatch(loginSuccess(profile));
  }

  return <WorkTimeContainer />;
}

export default WorkTimePage;
