import React from "react";
import styled, { keyframes } from "styled-components";

function LoginLoader() {
  return (
    <Background>
      <Spinner>
        <Ball />
      </Spinner>
      <p>로그인 중입니다. 잠시만 기다려주세요.</p>
    </Background>
  );
}

const Background = styled.div`
  background: rgba(255, 255, 255, 0.8);
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const motion = keyframes`
    0%{
        transform: translateX(0) scale(1)
    }
    25%{
        transform: translateX(-50px) scale(0.3)
    }
    50%{
        transform: translateX(0) scale(1)
    }
    75%{
        transform: translateX(50px) scale(0.3)
    }
    100%{
        transform: translateX(0) scale(1)
    }

`;

const Spinner = styled.div`
  width: 100px;
  height: 20px;
  text-align: center;
`;

const Ball = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
  animation: ${motion} 3s ease-out infinite;
`;

export default LoginLoader;
