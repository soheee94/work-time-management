const initialState = {
  '1334561731': [
    { date: '2020-3-20', worktime: [17, 18], vacationtime: [] },
    { date: '2020-4-20', worktime: [17, 18], vacationtime: [] },
  ],
};

export default function schedule(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
