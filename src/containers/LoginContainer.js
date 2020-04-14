import React from "react";
import KakaoLoginButton from "../components/KakaoLoginButton";
import { useDispatch } from "react-redux";
import { loginSuccess, loginError } from "../modules/auth";
import { useHistory } from "react-router-dom";
function LoginContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const onLoginSuccess = profile => {
    dispatch(loginSuccess(profile));
    history.push("/");
  };
  const onLoginError = error => dispatch(loginError(error));

  return <KakaoLoginButton onLoginSuccess={onLoginSuccess} onLoginError={onLoginError} />;
}

export default LoginContainer;
