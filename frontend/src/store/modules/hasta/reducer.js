const initialState = {
    isLoading: false, 
    userList: [],
    nullHasta:[],
    error:"",
    message:""
  }
  
export const UsersReducer = (state = initialState, action) => {
  //console.log("asd"+JSON.stringify(action.data) )
    switch (action.type) {
            case 'GET_NULL_HASTA_LIST':
            return {
              ...state,
              nullHasta: action.data
            }; 
            case 'GET_HASTA_LIST':
            return {
              ...state,
              userList: action.data
            }; 
            case 'ADD_HASTA':
              
            const index2 = state.nullHasta.findIndex((user) => user.id === action.data.id);
            console.log(action.message+"112 " + index2)
            return {
              ...state,
              //userList: [...state.userList, state.nullHasta[index2]],
              message:action.message
            }; 
            case 'DELETE_HASTA':
              console.log(action.message+"111 ")
            return {
              ...state,
              userList: state.userList.filter(item => item.id !== action.data),
              message:action.message
            }; 
            case 'GET_HASTA_ILAC':
              const index = state.userList.findIndex((user) => user.id === action.data[0].hastaId);
              const newList = [...state.userList]
              if(index>=0){
                newList[index].ilaclar = action.data;
              }
            return {
              ...state,
              userList:newList
            }; 
            case 'ADD_HASTA_ILAC':
              const hastaIndex = state.userList.findIndex((user) => user.id === action.data.hastaId);
              const newAddList = [...state.userList]
              if(hastaIndex>=0){
                newAddList[hastaIndex].ilaclar.push({...action.data,id:0})
              }             
            return {
              ...state,
              userList : newAddList,
              message:action.message
            };
            case 'DELETE_HASTA_ILAC':
              const DelIndex = state.userList.findIndex((hasta) => hasta.id === action.data.hastaId);
              const newDelList = [...state.userList]
              if(DelIndex>=0)
                newDelList[DelIndex].ilaclar = state.userList[DelIndex].ilaclar.filter(item => item.id !== action.data.id) 
            return {
              ...state,
              userList : newDelList,
              message:action.message
            };
            case 'UPDATE_HASTA_ILAC':
            const upIlacIndex = state.userList.findIndex((hasta) => hasta.id === action.data.hastaId);
            const newIlacUpList = [...state.userList]
            if(upIlacIndex>=0){
              const saatIndex = state.userList[upIlacIndex].ilaclar.findIndex((saat) => saat.id === action.data.id);
              if(saatIndex>=0)
              newIlacUpList[upIlacIndex].ilaclar[saatIndex] = action.data;
            }
            return {
              ...state,
              userList:newIlacUpList,
              message:action.message
            }; 
            case 'GET_ERROR':
            return {
              ...state,
              error: action.data,
            };
      default:
        return state;
    }
  };
  