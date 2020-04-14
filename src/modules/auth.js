// 액션 타입
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_ERROR = "auth/LOGIN_ERROR";

export const loginSuccess = profile => ({ type: LOGIN_SUCCESS, payload: profile });
export const loginError = error => ({ type: LOGIN_ERROR, payload: error });

const initialState = {
  profile: null,
  error: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, profile: action.payload };
    case LOGIN_ERROR:
      return { profile: null, error: action.payload };
    default:
      return state;
  }
}
