import axios from "axios";
var qs = require("qs");

// 请求前缀的地址
axios.defaults.baseURL = "http://106.14.46.99:8020";

axios.interceptors.request.use(config => {
  if (localStorage.getItem("token")) {
    config.headers.token = localStorage.getItem("token");
  }
  return config;
});
axios.interceptors.response.use(res => {
  // 请求返回的状态
  if (res.status == 200) {
    const data = res.data;
    if (data.code == -1) {
      alert("登录过期");
    } else if (data.Code == -2) {
      alert(data.Message);
    }
    return data;
  } else {
    return res;
  }
});

export const api = {
  async get(url, data) {
    try {
      let res = await axios.get(url, { params: data });
      res = res;
      return new Promise((resolve, reject) => {
        resolve(res);
      });
    } catch (error) {
      console.log(error);
    }
  },
  async post(url, data) {
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
};
