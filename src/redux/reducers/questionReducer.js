const initState = {
  questions: [],
  status: false,
  index: 0,
  number: 0,
};

const QuestionReducer = (state = initState, action) => {
  switch (action.type) {
    case "setindex":
      return { ...state, index: action.payload };
    case "setanswerquestion":
      return {
        ...state,
        question: state.QuestionReducer.questions.map((item) => {
          {
            if (item.id === action.payload.id) return action.payload;
            else return item;
          }
        }),
      };
    default:
      return state;
  }
};

export default getQuestionPlayReducer;
