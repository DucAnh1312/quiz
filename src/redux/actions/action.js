export const getLoginData = (user) => {
  return {
    type: "getlogindata",
    payload: user,
  };
};

export const getQuestionPlay = (question) => {
  return {
    type: "getquestionplay",
    payload: question,
  };
};

export const getResults = (data) => {
  return {
    type: "getresults",
    payload: data,
  };
};
