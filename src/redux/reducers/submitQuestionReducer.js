const initState = {};

const submitQuestionReducer = (state = initState, action) => {
  switch (action.type) {
    case "getquestionsubmit":
      return (action.payload);

    default:
      return state;
  }
};

export default submitQuestionReducer;
