import api from "../../../utils/api";

export const getIlacList = () => {
  return async (dispatch, getState) => {
    await api()
      .get('/Ilac/gettall') 
      .then(async function (response) {
        dispatch({ type: 'GET_ILAC_LIST', data: response.data })
          //console.log(response.data);   
      }) 
      .catch(function (error) {
        dispatch({ type: 'GET_LIST_ERROR', data: error.response.data });
        console.log(error.message +" " +error.response.data);
      });
  };
};

export const addIlac = ( ilacAdi, ilacDetayi ) => {
  return async (dispatch, getState) => {
    await api()
      .post('/Ilac/add', {
        ilacAdi: ilacAdi,
        ilacDetayi: ilacDetayi,
      })
      .then(async function (response) {
        dispatch({ type: 'ADD_ILAC', data: {ilacAdi,ilacDetayi,ilacSaatleri:[] } });   
        //console.log(response.data);  
        dispatch(getIlacList())
      })
      .catch(function (error) {
        console.log(error.message+" - "+ error.response.data);
        
        dispatch({ type: 'SIGN_IN_ERROR', data: error.response.data });
      });   
  };
};

export const deleteIlac = ( ilac ) => {
  return async (dispatch, getState) => {
    await api()
      .post('/Ilac/delete', {
        id:ilac.id,
        ilacAdi: ilac.ilacAdi,
        ilacDetayi: ilac.ilacDetayi
      })
      .then(async function (response) {
        dispatch({ type: 'DELETE_ILAC', data: ilac });   
        //console.log(response.data);  
        dispatch(getIlacList())
      })
      .catch(function (error) {
        console.log(error.message+" - "+ error.response.data);
        
        dispatch({ type: 'SIGN_IN_ERROR', data: error.response.data });
      });   
  };
};

export const addIlacSaati = ( saat, adet, ilacId ) => {
 
  var newAdet = Number(adet);
  //console.log({saat, newAdet ,ilacId })
  return async (dispatch, getState) => {
    await api()
      .post('/IlacSaati/add', {
        saat: saat,
        adet: newAdet,
        ilacId:ilacId
      })
      .then(async function (response) {
        dispatch({ type: 'ADD_ILAC_SAATI', data: {saat,adet:newAdet,ilacId } });   
        //console.log(response.data);  
        dispatch(getIlacList())
      })
      .catch(function (error) {
        console.log(error.message+" - "+ error.response.data);
        
        dispatch({ type: 'SIGN_IN_ERROR', data: error.response.data });
      });   
  };
};

export const deleteIlacSaati = ( ilacSaati ) => {
  return async (dispatch, getState) => {
    await api()
      .post('/IlacSaati/delete', {
        id:ilacSaati.id,
        saat: ilacSaati.saat,
        adet: ilacSaati.adet,
        ilacId: ilacSaati.ilacId
      })
      .then(async function (response) {
        dispatch({ type: 'DELETE_ILAC_SAATI', data: ilacSaati ,response:response.data });    
        dispatch(getIlacList())
      })
      .catch(function (error) {
        console.log(error.message+" - "+ error.response.data);
        
        dispatch({ type: 'SIGN_IN_ERROR', data: error.response.data });
      });   
  };
};

export const updateIlacSaati = ( ilacSaati ) => {
  console.log(ilacSaati)
  return async (dispatch, getState) => {
    await api()
      .post('/IlacSaati/update', {
        id: ilacSaati.id,
        saat: ilacSaati.saat,
        adet: ilacSaati.adet,
        ilacId: ilacSaati.ilacId
      })
      .then(async function (response) {
        dispatch({ type: 'UPDATE_ILAC_SAATI', data: ilacSaati });    
        dispatch(getIlacList())
      })
      .catch(function (error) {
        console.log(error.message+" - "+ error.response.data);
        
        dispatch({ type: 'SIGN_IN_ERROR', data: error.response.data });
      });   
  };
};