// 액션 타입
const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_ERROR = "auth/LOGIN_ERROR";

export const login = () => ({ type: LOGIN });
export const loginSuccess = profile => ({ type: LOGIN_SUCCESS, payload: profile });
export const loginError = error => ({ type: LOGIN_ERROR, payload: error });

const initialState = {
  loading: false,
  profile: null,
  error: null
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, profile: action.payload, error: null };
    case LOGIN_ERROR:
      return { loading: false, profile: null, error: action.payload };
    default:
      return state;
  }
}
