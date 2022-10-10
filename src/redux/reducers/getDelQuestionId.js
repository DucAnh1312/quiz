const initState = {};

const getQuestionIdReducer = (state = initState, action) => {
  switch (action.type) {
    case "getidquestion":
      return action.payload;

    default:
      return state;
  }
};

export default getQuestionIdReducer;
