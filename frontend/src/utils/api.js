import axios from "axios";

export default () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://192.168.1.2:80/api",
    headers: {
      Authorization: "Bearer "+JSON.parse(token),
    },
  });
};