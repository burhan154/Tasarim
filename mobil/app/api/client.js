import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const mainAxios = axios.create({
  baseURL: "https://192.168.1.2/api",
});

const profileAxios =  axios.create({
  baseURL: "http://192.168.1.2/api",
});

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = "Bearer "+token;
    profileAxios.defaults.headers.common.Authorization = "Bearer "+token;
  } else {
    delete axios.defaults.headers.common.Authorization;
    delete profileAxios.defaults.headers.common.Authorization;
  }
};

export default setAuthToken;
export { mainAxios, profileAxios };