// 액션 타입

const today = new Date();
const initialState = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  date: 21,
};

const CHANGE_MONTH = `date/CHANGE_MONTH`;
export const changeMonth = value => ({
  type: CHANGE_MONTH,
  payload: value,
});
// const GET_TODAY = `date/GET_TODAY`;
export const getToday = () => {
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

export default function date(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MONTH:
      return {
        ...state,
        year: action.payload.year,
        month: action.payload.month,
      };
    default:
      return state;
  }
}
