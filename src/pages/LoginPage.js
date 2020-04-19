import React from 'react';
import styled from 'styled-components';
import LoginContainer from '../containers/login/LoginContainer';

function LoginPage({ history }) {
  const profile = JSON.parse(sessionStorage.getItem('profile'));
  if (profile !== null) {
    history.push('/');
  }

  return (
    <LoginTemplate>
      <h1>근태 관리 시스템</h1>
      <LoginContainer />
    </LoginTemplate>
  );
}

const LoginTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

export default LoginPage;
