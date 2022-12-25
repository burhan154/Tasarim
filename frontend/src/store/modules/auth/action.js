import api from "../../../utils/api";

export const signIn = ( username, password ) => {
  return async (dispatch, getState) => {
    await api()
      .post('/auth/login', {
        email: username,
        password: password,
      })
      .then(async function (response) {
        localStorage.setItem("token", response.data.token);
        dispatch({ type: 'SIGN_IN', data: response.data });   
        //console.log(response.data); 
        dispatch(userIn());  
      })
      .catch(function (error) {
        console.log(error.message+" - "+ error.response.data);
        
        dispatch({ type: 'SIGN_IN_ERROR', data: error.response.data });
      });   
  };
};

export const userIn = () => {
  return async (dispatch, getState) => {
    await api()
      .get('/AileHekimi/getloggedInAileHekimi') 
      .then(async function (response) {
        dispatch({ type: 'USER_IN', data: response.data })
          //console.log(response.data);   
      }) 
      .catch(function (error) {
        //logout();
        dispatch({ type: 'SIGN_IN_ERROR', data: error.response.data });
        console.log(error.message +" userIn" +error.response.data);
      });
  };
};


const logout  = () =>{
  localStorage.removeItem("token");
  localStorage.removeItem("user"); 
}


export const signOut = () => {
  return async (dispatch, getState) => {
    logout();
    dispatch({ type: 'SIGN_OUT'});
  };
};
