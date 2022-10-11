import axios from "axios";
import {
  getQuestionsPlayApi,
  getQuestionsApi,
  submitQuestionsApi,
  deleteQuestionApi,
  updateQuestionApi,
  createNewQuestion
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
  deleteQuestion: (id) => {
    let config = {
      headers: {
        Authorization: "Bearer " + LocalStorageService.getAccessToken(),
      },
    };
    return axios.delete(deleteQuestionApi + id, config);
  },
  createQuestion: (question) => {
    let config = {
      headers: {
        Authorization: "Bearer " + LocalStorageService.getAccessToken(),
      },
    };
    return axios.post(createNewQuestion, question, config);
  },
  editQuestion: (dataQuestion, id) => {
    return axios.patch(
      updateQuestionApi + id,
        dataQuestion,
        {
            headers: {
                'Authorization': `bearer ${LocalStorageService.getAccessToken(
                  "access_token")}`
            },
        }
    )
}
};
