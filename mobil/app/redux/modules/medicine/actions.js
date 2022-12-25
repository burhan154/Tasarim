const REGISTER_URL = "/login";

import client,{ profileAxios } from "../../../api/client";

export const getAllMedicine = () => {
  return async (dispatch, getState) => {
    profileAxios
      .get('hastaIlac/getall') 
      .then(async function (response) {
        dispatch({ type: 'RESTORE_ILAC', data:response.data }), 
        console.log("----"+JSON.stringify(response.data) +"-----");
      }) 
      .catch(function (error) {
        console.log(error.message +" medicine");
      });
  };
};
