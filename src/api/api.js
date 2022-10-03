import axios from "axios";
// import { getCookies } from "./axiosInstance";

// const request = axios.create({
//   baseURL: 'https://quangnh.xyz/v1/'
// })

export const loginApi = {
  post: (user) => {
    const url = "https://quangnh.xyz/v1/authentication/login";
    return axios.post(url, {
      email: user.email,
      password: user.password,
    });
  },
};

export const forgotApi = {
  post: (user) => {
    const url = "https://quangnh.xyz/v1/authentication/forgot-password";
    return axios.post(url, {
      email: user.email,
    });
  },
};

export const registerApi = {
  post: (user) => {
    const url = "https://quangnh.xyz/v1/authentication/register";
    return axios.post(url, {
      email: user.email,
      name: user.name,
      password: user.password,
    });
  },
};



export const questionApi = {
  getQuestionsPlay: (number) => {
    const url = "https://quangnh.xyz/v1/questions/play";
    return axios.get(url, {
      headers: {
        Authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
      },
      params: {
        total: number,
      },
    });
  },
  submitQuestionsPlay: (listQuestionsSubmit) => {
    const url = "https://quangnh.xyz/v1/questions/submit";
    return axios.post(url, {
      headers: {
        Authorization: `bearer ${localStorage.getItem('REFRESH_TOKEN')}`,
      },
    });
  },
};
