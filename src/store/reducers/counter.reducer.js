const initialState = {
  counter: {
    hour: 0,
    minuts: 0,
    second: 0
  },
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COUNTER':      
      return {
        ...state,
        counter: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;