const initialState = {
  isLoading: false, 
  isSignout: true,
  userToken: null,
  userId:0,
  firstName: null, 
  lastName: null,
  email: null,
  status:false,
}

export const AuthReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
     case 'RESTORE_TOKEN':
          return {
            ...state,
            userToken: action.data.token,
            userId:action.data.userId,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...state,
            isSignout: false,
            userToken: action.data.token,
          };
          case 'USER_IN':
          return {
            ...state,
            firstName: action.data.firstName, 
            lastName: action.data.lastName,
            email: action.data.email,
            status:action.data.status,
          };
        case 'SIGN_OUT':
          return {
            ...state,
            isSignout: true,
            userToken: null,
            userId:0,
            firstName: null, 
            lastName: null,
            email: null,
            status:false,
          };
    default:
      return state;
  }
};
