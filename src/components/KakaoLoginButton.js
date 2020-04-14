import React from "react";
import kakao_login_btn from "../assets/kakao_login_btn_large_wide.png";

export default class KakaoLoginButton extends React.Component {
  componentDidMount() {
    const key = "081826db1080d7061413204191660bb7";

    ((id, cb) => {
      if (document.getElementById(id) == null) {
        const js = document.createElement("script");

        js.id = id;
        js.src = "//developers.kakao.com/sdk/js/kakao.min.js";
        js.onload = cb;

        document.body.append(js);
      }
    })("kakao-sdk", () => {
      window.Kakao.init(key);
    });
  }

  onClick = () => {
    if (window.Kakao) {
      window.Kakao.Auth.login({
        success: response => {
          window.Kakao.API.request({
            url: `/v2/user/me`,
            success: profile => {
              const result = { response, profile };
              console.log(result);
            },
            fail: function(error) {
              console.log(error);
            }
          });
        },
        fail: function(error) {
          console.log(error);
        }
      });
    }
  };

  onLogout = () => {
    window.Kakao.Auth.logout(function() {
      console.log(window.Kakao.Auth.getAccessToken());
    });
  };

  render() {
    return (
      <>
        <button onClick={this.onClick}>
          <img src={kakao_login_btn} alt="카카오톡 로그인" />
        </button>
        <button onClick={this.onLogout}>로그아웃</button>
      </>
    );
  }
}
