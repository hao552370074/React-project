import axios from "axios";
const qs = require("qs");

axios.defaults.baseURL = "http://";
axios.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    config.header.token = localStorage.getItem("token");
  }
  return config;
});
axios.interceptors.response.use((res) => {
  if (res.status == 200) {
  } else {
  }
  return res;
});

async function get(url, data) {
  try {
    let res = await axios.get(url, { params: data });
    res = res;
    return new Promise((resolve, reject) => {
      resolve(res);
    });
  } catch (error) {
    console.log(error);
  }
}

async function post(url, data) {
  try {
    let res = await axios.post(url, qs.stringify(data));
    res = res;
    return new Promise((resolve, reject) => {
      resolve(res);
    });
  } catch (error) {
    console.log(error);
  }
}

export function counterReducer(state = 0, action) {
  switch (action.type) {
    case "add":
      return state + 10;
    case "minus":
      return state - 1;
    default:
      return state;
  }
}
