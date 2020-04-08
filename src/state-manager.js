let state = {
  currentPlayer: 'x',
  board: ['', '', '', '', '', '', '', '', ''],
};

const subscribers = [];

export default {
  getState: () => state,
  setState: (newState) => {
    state = { ...state, ...newState };
    subscribers.forEach((subscriber) => {
      subscriber(state);
    });
  },
  subscribe: (subscriber) => {
    subscribers.push(subscriber);
  },
};
