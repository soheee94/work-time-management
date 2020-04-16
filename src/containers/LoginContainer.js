import React from "react";
import LoginButton from "../components/LoginButton";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginError, login } from "../modules/auth";
import { useHistory } from "react-router-dom";
import LoginLoader from "../components/LoginLoader";
function LoginContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);
  const onLogin = () => dispatch(login());
  const onLoginSuccess = profile => {
    dispatch(loginSuccess(profile));
    history.push("/");
  };
  const onLoginError = error => {
    alert(error);
    dispatch(loginError(error));
  };

  return (
    <>
      <LoginButton onLoginSuccess={onLoginSuccess} onLoginError={onLoginError} onLogin={onLogin} />
      {loading && <LoginLoader />}
    </>
  );
}

export default LoginContainer;
