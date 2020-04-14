import React from "react";
import WorkTimeContainer from "../containers/WorkTimeContainer";
import { useSelector } from "react-redux";

function WorkTimePage({ history }) {
  const profile = useSelector(state => state.auth.profile);
  console.log(profile);
  if (profile === null) {
    history.push("/login");
  }
  return (
    <div>
      <WorkTimeContainer />
    </div>
  );
}

export default WorkTimePage;
