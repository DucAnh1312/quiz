import axios from "axios";
import { getQuestionsPlayApi } from "./customUrl";
import LocalStorageService from "../tokenStorage/LocalStorageService";

export const questionApi = {
  getQuestionsPlay: (number) => {
    return axios.get(getQuestionsPlayApi, {
      headers: {
        Authorization: `bearer ${LocalStorageService.getAccessToken('access_token')}`,
      },
      params: {
        total: number,
      },
    });
  },
};
