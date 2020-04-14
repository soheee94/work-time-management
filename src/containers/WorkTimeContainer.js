import React from "react";
import { useSelector, useDispatch } from "react-redux";
function WorkTimeContainer() {
  const profile = useSelector(state => state.auth.profile);
  const nickname = profile && profile.properties.nickname;
  return <div>Hello {nickname}</div>;
}

export default WorkTimeContainer;
