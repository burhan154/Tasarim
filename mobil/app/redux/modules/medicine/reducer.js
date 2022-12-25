const initialState = {
  ilac:[],
}

export const MedicineReducer = (state = initialState, action) => {
  switch (action.type) {
     case 'RESTORE_ILAC':
          return {
            ...state,
            ilac: action.data,
          };
    default:
      return state;
  }
};
