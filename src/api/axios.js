// // axios.js
// import axios from "axios";
// export default axios.create({
//   baseURL: "http://localhost:3500",
// });

import axios from "axios";
const customFetch = axios.create({
  baseURL: "https://quangnh.xyz/v1",
});
export default customFetch;

