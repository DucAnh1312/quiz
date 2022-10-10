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

export const getQuestionId = (id) => {
  return {
    type: 'getidquestion',
    payload: id
  }
}
