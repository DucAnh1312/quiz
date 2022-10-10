import axios from "axios";
import {
  getUserApi,
  getUserByIdApi,
  updateUserApi,
  createNewUserApi,
  deleteUserApi,
} from "./customUrl";
import LocalStorageService from "../tokenStorage/LocalStorageService";

export const userApi = {
  getUser: (filter) => {
    return axios.get(getUserApi, {
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
        role: filter.role,
      },
    });
  },
  deleteUser: (id) => {
    let config = {
      headers: {
        Authorization: "Bearer " + LocalStorageService.getAccessToken(),
      },
    };
    return axios.delete(deleteUserApi + id, config);
  },
};
