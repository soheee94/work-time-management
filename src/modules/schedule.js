const initialState = {
  '1334561731': {
    '2020-3-20': {
      worktime: [17, 18],
      vacationtime: [],
    },
    '2020-4-20': {
      worktime: [17, 18],
      vacationtime: [],
    },
  },
};

const SET_WORK_TIME = 'schedule/SET_WORK_TIME';
const GET_WORK_TIME = 'schedule/GET_WORK_TIME';

export const setWorkTime = data => ({ type: SET_WORK_TIME, payload: data });
export const getWorkTime = () => ({ type: GET_WORK_TIME });

export default function schedule(state = initialState, action) {
  switch (action.type) {
    case SET_WORK_TIME:
      const { id, date, worktime, vacationtime } = action.payload;
      const data = {
        ...state,
        [id]: {
          ...state[id],
          [date]: {
            worktime: worktime,
            vacationtime: vacationtime,
          },
        },
      };
      // 로컬 스토리지 저장
      localStorage.setItem('kakao-work-schedule', JSON.stringify(data));
      return data;
    case GET_WORK_TIME:
      return JSON.parse(localStorage.getItem('kakao-work-schedule'));
    default:
      return state;
  }
}
