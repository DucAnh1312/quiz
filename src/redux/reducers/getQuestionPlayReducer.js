const initState = [];

const getQuestionPlayReducer = (state = initState, action) => {
  switch (action.type) {
    case "getquestionplay":
      return action.payload;

    default:
      return state;
  }
};

export default getQuestionPlayReducer;
