import React from "react";
import styled from "styled-components";
import kakao_login_btn from "../assets/kakao_login_btn_large_narrow.png";

export default class LoginButton extends React.Component {
  componentDidMount() {
    const key = "081826db1080d7061413204191660bb7";
    const js = document.createElement("script");
    js.id = "kakao-sdk";
    js.src = "//developers.kakao.com/sdk/js/kakao.min.js";
    js.onload = () => {
      window.Kakao.init(key);
    };
    document.body.append(js);
  }

  onClick = () => {
    const { onLogin, onLoginSuccess, onLoginError } = this.props;
    if (window.Kakao) {
      window.Kakao.Auth.login({
        success: response => {
          onLogin();
          window.Kakao.API.request({
            url: `/v2/user/me`,
            success: profile => {
              // const result = { response, profile };
              onLoginSuccess(profile);
            },
            fail: function(error) {
              onLoginError(error);
            }
          });
        },
        fail: function(error) {
          onLoginError(error);
        }
      });
    }
  };

  // onLogout = () => {
  //   window.Kakao.Auth.logout(function() {
  //     console.log(window.Kakao.Auth.getAccessToken());
  //   });
  // };

  render() {
    return (
      <Button onClick={this.onClick}>
        <img src={kakao_login_btn} alt="카카오톡 로그인" />
      </Button>
    );
  }
}

const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
