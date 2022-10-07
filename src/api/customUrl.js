export const urlApi = "https://quangnh.xyz/v1";

// authenticate
export const loginApi = `${urlApi}/authentication/login`;
export const registerApi = `${urlApi}/authentication/register`;
export const forgotApi = `${urlApi}/authentication/forgot-password`;
export const logoutApi = `${urlApi}/authentication/logout`;
export const refreshTokenApi = `${urlApi}/authentication/refresh-token`;

// question
export const createNewQuestion = `${urlApi}/questions/play`;
export const getQuestionsApi = `${urlApi}/questions`;
export const getQuestionsPlayApi = `${urlApi}/questions/play`;
export const submitQuestionsApi = `${urlApi}/questions/submit`;
export const getQuestionByIdApi = `${urlApi}/questions/`;
export const updateQuestionApi = `${urlApi}/questions/`;
export const deleteQuestionApi = `${urlApi}/questions/`;
export const uploadThumbnailApi = `${urlApi}/questions/upload-thumbnail`;

// answer
export const createAnswerApi = `${urlApi}/answers`;
////// getAnswerByIdApi
export const updateAnswerApi = `${urlApi}/answers/`;
////// updateAnswerById
export const deleteAnswerApi = `${urlApi}/answers/`;

// user
export const getUserByIdApi = `${urlApi}/user/`;
// getUserById
export const updateUserApi = `${urlApi}/v1/user/`;
export const createNewUserApi = `${urlApi}/v1/user`;
export const deleteUserApi = `${urlApi}/v1/user/`;
////// change Pass
////// upload image
