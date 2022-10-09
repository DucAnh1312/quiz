const initState = {};

const submitResultsReducer = (state = initState, action) => {
  switch (action.type) {
    case "getresults":
      return (action.payload);

    default:
      return state;
  }
};

export default submitResultsReducer;
