export const getLoginData = (user) => {
  return {
    type: "getlogindata",
    payload: user,
  };
};

export const getQuestionPlay = (question) => {
    return {
        type: "getquestionplay",
        payload: question
    }
}

// export const getIndex = (index) => {
//   return {
//     type: "setindex",
//     payload: index
//   }
// }

// export const getAnswerQuestion = ( question) => {
//   return {
//     type: "setanswerquestion",
//     payload: question
//   }
// }
