import React from "react";
import { useSelector } from "react-redux";
import HeaderMonthPicker from "../components/worktime/HeaderMonthPicker";
function WorkTimeHeaderContainer() {
  const profile = useSelector(state => state.auth.profile);
  const nickname = profile && profile.properties.nickname;
  return (
    <>
      <HeaderMonthPicker />
      {/* <div>Hello {nickname}</div> */}
    </>
  );
}

export default WorkTimeHeaderContainer;
