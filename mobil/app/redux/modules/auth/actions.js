const REGISTER_URL = "/login";
import setAuthToken,{ profileAxios,mainAxios } from "../../../api/client";
import client from "../../../api/client";
import * as SecureStore from 'expo-secure-store';
import { Alert } from "react-native";

export const signIn = ( username, password ) => {
  return async (dispatch, getState) => {
    await profileAxios
      .post('/auth/login', {
        email: username,
        password: password,
      })
      .then(async function (response) {
        //dispatch({ type: 'SIGN_IN', data: response.data}),
        //console.log("-login---"+response.data.token+"-----");
        setAuthToken(response.data.token),
        dispatch({ type: 'SIGN_IN', data: response.data });
        //console.log("yy" + response.data.token);
        SecureStore.setItemAsync("userToken", JSON.stringify(response.data.token));
        //userIn();
        //dispatch(userIn());
        //console.log("----"+response.data.userId+"-----");
        //await SecureStore.setItemAsync("userToken", response.data.token);
        
      })
      .catch(function (error) {
        console.log(error.message+" - ",error.response.data);
        Alert.alert("Error ", error.response.data);
      });

      
  };
};


export const userIn = () => {
  //const token = SecureStore.getItemAsync('userToken');
  //console.log("xxx" + token);
  return async (dispatch, getState) => {
    const token = await SecureStore.getItemAsync('userToken');
     console.log("xxx" + token);
    await profileAxios
      .get('/hasta/getloggedInUser',{
        //headers: {'Authorization': "Bearer "+ token}
    }) 
      .then(async function (response) {
        dispatch({ type: 'USER_IN', data: response.data })
        console.log("----"+JSON.stringify(response.data) +"-----");
      }) 
      .catch(function (error) {
        console.log(error.message +" userIn");
      });
  };
};




export const signUp = (username,email,password) => {
  return async (dispatch, getState) => {
    //console.log(username + password);
    await profileAxios
      .post('/auth/login', {
        email: username,
        email,
        password,
      })
      .then(async function (response) { 
        // handle successaa
        dispatch({ type: 'SIGN_IN', data: response.data}),
        //console.log(response.data.token);
        await SecureStore.setItemAsync("userToken", response.data.token);
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      });
  };
};

export const signOut = () => {
  return async (dispatch, getState) => {
    await SecureStore.setItemAsync("userToken", "")
      .then(dispatch({ type: 'SIGN_OUT'}))
    //await SecureStore.setItemAsync("userToken", null);
  };
};

export const restoreToken = (userToken) => { 
 //console.log("+++-----"+userToken+"++++++++");
  setAuthToken(userToken);
  
  return { type: 'RESTORE_TOKEN', data: userToken };
};