const initialState = {
    isLoading: false, 
    isSignout: true,
    userToken: null,
    userId:0,
    firstName: null, 
    lastName: null,
    email: null,
    status:false,
    error:""
  }
  
export const AuthReducer = (state = initialState, action) => {
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
            case 'SIGN_IN_ERROR':
            return {
              ...state,
              isSignout: true,
              error: action.data,
              userToken: null,
              userId:0,
              firstName: null, 
              lastName: null,
              email: null,
              status:false,
            };
            case 'USER_IN':
            return {
              ...state,
              userId: action.data.id, 
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
              error:""
            };
      default:
        return state;
    }
  };
  