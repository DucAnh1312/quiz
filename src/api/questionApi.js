import axios from "axios";
import { getQuestionsPlayApi, getQuestionsApi } from "./customUrl";
import LocalStorageService from "../tokenStorage/LocalStorageService";

export const questionApi = {
  getQuestionsPlay: (number) => {
    return axios.get(getQuestionsPlayApi, {
      headers: {
        Authorization: `bearer ${LocalStorageService.getAccessToken(
          "access_token"
        )}`,
      },
      params: {
        total: number,
      },
    });
  },
  getQuestions: (keyWord, page, size, order, sortField) => {
    let config = {
      headers: {
        Authorization: `bearer ${LocalStorageService.getAccessToken(
          "access_token"
        )}`,
      },
      params: {
        keyWord : keyWord,
        page: page,
        size: size,
        order: order,
        // sortField: sortField,
      },
    };
    return axios.get(getQuestionsApi, config);
  },
};
//demo get question
const abc = async (data) => {
  try{
    const rs = await questionApi.getQuestions(data)
    console.log("data".rs)
  }
  catch (error) {
    console.log(error)
  }
}
setTimeout (abc(10,4,4,"ASC"), 5000)
