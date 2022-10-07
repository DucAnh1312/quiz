import axios from "axios";
import { loginApi, registerApi, forgotApi } from "./customUrl";

export const authenticateApi = {
  login: (user) => {
    return axios.post(loginApi, {
      email: user.email,
      password: user.password,
    });
  },
  register: (user) => {
    return axios.post(registerApi, {
      email: user.email,
      name: user.name,
      password: user.password,
    });
  },
  forgot: (user) => {
    const url = forgotApi;
    return axios.post(url, {
      email: user.email,
    });
  },
};
