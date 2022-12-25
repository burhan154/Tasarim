const initialState = {
    isLoading: false, 
    ilacList: [],
    error:""
  }
  
export const IlacListReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
          case 'GET_ILAC_LIST':
            return {
              ...state,
              ilacList: action.data,
            }; 
            case 'ADD_ILAC':
            return {
              ...state,
              ilacList: [...state.ilacList, 
                { id: state.ilacList[state.ilacList.length-1].id+1, ilacAdi:action.data.ilacAdi ,ilacDetayi:action.data.ilacDetayi ,ilacSaatleri:action.data.ilacSaatleri}]
            };
            case 'UPDATE_ILAC':
            const upIndex = state.ilacList.findIndex((ilac) => ilac.id === action.data.id);
            const newUpList = [...state.ilacList]
            if(upIndex>=0)
              newUpList[index] = action.data;
            return {
              ...state,
              ilacList:newUpList
            };
            case 'DELETE_ILAC':
            return {
              ...state,
                ilacList :  state.ilacList.filter(item => item.id !== action.data.id)
            };
            case 'ADD_ILAC_SAATI':
              const index = state.ilacList.findIndex((ilac) => ilac.id === action.data.ilacId);
              const newList = [...state.ilacList]
              if(index>=0)
                newList[index].ilacSaatleri = [...state.ilacList[index].ilacSaatleri, action.data];
            return {
              ...state,
                ilacList :  newList
            };
            case 'DELETE_ILAC_SAATI':
              const DelIndex = state.ilacList.findIndex((ilac) => ilac.id === action.data.ilacId);
              const newDelList = [...state.ilacList]
              if(DelIndex>=0)
                newDelList[DelIndex].ilacSaatleri = state.ilacList[DelIndex].ilacSaatleri.filter(item => item.id !== action.data.id) 
            return {
              ...state,
                ilacList :  newDelList
            };
            case 'UPDATE_ILAC_SAATI':
            const upIlacIndex = state.ilacList.findIndex((ilac) => ilac.id === action.data.ilacId);
            const newIlacUpList = [...state.ilacList]
            if(upIlacIndex>=0){
              const saatIndex = state.ilacList[upIlacIndex].ilacSaatleri.findIndex((saat) => saat.id === action.data.id);
              if(saatIndex>=0)
              newIlacUpList[upIlacIndex].ilacSaatleri[saatIndex] = action.data;
            }
            return {
              ...state,
              ilacList:newIlacUpList
            };
      default:
        return state;
    }
  };
  