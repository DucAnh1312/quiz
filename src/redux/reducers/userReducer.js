const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "getlogindata":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
