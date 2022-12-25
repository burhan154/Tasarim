import api from "../../../utils/api";

export const getHastaList = () => {
  return async (dispatch, getState) => {
    await api()
      .get('/Hasta/gethastainfolist') 
      .then(async function (response) {
        dispatch({ type: 'GET_HASTA_LIST', data: response.data })
          console.log(response.data);   
      }) 
      .catch(function (error) {
        dispatch({ type: 'GET_ERROR', data: error.response.data });
        console.log(error.message +" " +error.response.data);
      });
  };
};

export const GetHastaWithoutAileHekimi = () => {
  return async (dispatch, getState) => {
    await api()
      .get('/Hasta/GetHastaWithoutAileHekimi') 
      .then(async function (response) {
        dispatch({ type: 'GET_NULL_HASTA_LIST', data: response.data })
          console.log(response.data);   
      }) 
      .catch(function (error) {
        dispatch({ type: 'GET_ERROR', data: error.response.data });
        console.log(error.message +" " +error.response.data);
      });
  };
};
export const AddHasta = (id,aileHekimiId) => {
  return async (dispatch, getState) => {
    await api()
      .post('/Hasta/add', {
        id:id,
        aileHekimiId:aileHekimiId
      })
      .then(async function (response) {
        dispatch({ type: 'ADD_HASTA', data: response.data , message:response.data})
        dispatch(getHastaList())
        dispatch(GetHastaWithoutAileHekimi()) 
      }) 
      .catch(function (error) {
        dispatch({ type: 'GET_ERROR', data: error.response.data });
      });
  };
};

export const deleteHasta = (id,aileHekimiId) => {
  return async (dispatch, getState) => {
    await api()
      .post('/Hasta/delete', {
        id:id,
        aileHekimiId:aileHekimiId
      })
      .then(async function (response) {
        dispatch({ type: 'DELETE_HASTA', data: id, message:response.data })
        dispatch(getHastaList())
        dispatch(GetHastaWithoutAileHekimi())   
      }) 
      .catch(function (error) {
        dispatch({ type: 'GET_ERROR', data: error.response.data });
        console.log(error.message +" " +error.response.data);
      });
  };
};

export const HastaIlac = (id) => { 
  return async (dispatch, getState) => {
    await api()
      .get('/HastaIlac/getallbyhastaid?hastaId='+id) 
      .then(async function (response) {
        dispatch({ type: 'GET_HASTA_ILAC', data: response.data })
          console.log(response.data);   
      }) 
      .catch(function (error) {
        //dispatch({ type: 'GET_ERROR', data: error.response.data });
        console.log(error.message +" " +error.response.data);
      });
  };
};


export const addHastaIlac = ( hastaId,ilacId,baslangic,bitis,ilac ) => { 
  return async (dispatch, getState) => {
    await api()
      .post('/HastaIlac/add', {
        hastaId: hastaId,
        ilacId: ilacId,
        baslangic:baslangic,
        bitis,bitis,
      })
      .then(async function (response) {
        dispatch({ type: 'ADD_HASTA_ILAC', data: {hastaId,ilacId,baslangic,bitis,ilac} ,message:response.data});   
        //console.log(response.data);     
        dispatch(HastaIlac(hastaId));
      })
      .catch(function (error) {
        console.log(error.message+" - "+ error.response.data);        
        dispatch({ type: 'GET_ERROR', data: error.response.data });
      });   
  };
};

export const updateHastaIlac = (id, hastaId,ilacId,baslangic,bitis,ilac ) => {
  return async (dispatch, getState) => {
    await api()
      .post('/HastaIlac/update', {
        id:id,
        hastaId: hastaId,
        ilacId: ilacId,
        baslangic:baslangic,
        bitis,bitis,
      })
      .then(async function (response) {
        dispatch({ type: 'UPDATE_HASTA_ILAC', data: {id,hastaId,ilacId,baslangic,bitis,ilac} ,message:response.data});   
        //console.log(response.data);
        dispatch(HastaIlac(hastaId));         
      })
      .catch(function (error) {
        console.log(error.message+" - "+ error.response.data);       
        dispatch({ type: 'GET_ERROR', data: error.response.data });
      });   
  };
};

export const deleteHastaIlac = (id, hastaId,ilacId,baslangic,bitis ) => {
  return async (dispatch, getState) => {
    await api()
      .post('/HastaIlac/delete', {
        id:id,
        hastaId: hastaId,
        ilacId: ilacId,
        baslangic:baslangic,
        bitis,bitis,
      })
      .then(async function (response) {
        dispatch({ type: 'DELETE_HASTA_ILAC', data: {id, hastaId,ilacId,baslangic,bitis} , message:response.data});   
        //console.log(response.data);
        dispatch(HastaIlac(hastaId)); 
      })
      .catch(function (error) {
        console.log(error.message+" - "+ error.response.data); 
        dispatch({ type: 'GET_ERROR', data: error.response.data });
      });   
  };
};