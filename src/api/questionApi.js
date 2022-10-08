import axios from "axios";
import {
  getQuestionsPlayApi,
  getQuestionsApi,
  submitQuestionsApi,
} from "./customUrl";
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
  getQuestion: (filter) => {
    return axios.get(getQuestionsApi, {
      headers: {
        Authorization: `bearer ${LocalStorageService.getAccessToken(
          "access_token"
        )}`,
      },
      params: {
        sortField: filter.sortField,
        keyWord: filter.keyWord,
        order: filter.order,
        size: filter.size,
        page: filter.page,
      },
    });
  },
  submitQuestionsPlay: (listQuestionsSubmit) => {
    return axios.post(submitQuestionsApi, listQuestionsSubmit, {
      headers: {
        Authorization: `bearer ${LocalStorageService.getAccessToken(
          "access_token"
        )}`,
      },
    });
  },
};
