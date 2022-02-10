import { ADDFILMLOADING , ADDFILMSUCESS , ADDFILMERROR } from './actionTypes'
import { getFilmsAxios } from '../../components/utils/Axios';
export const addFilmLoading = ()=>({type:ADDFILMLOADING});
export const addFilmSucess = (data)=>({type:ADDFILMSUCESS,payload:data});
export const addFilmError = (data)=>({type:ADDFILMERROR,payload:data});


export const fetchFilmData = async (dispatch,id) => {
    dispatch(addFilmLoading());
    try {
      const { data } = await getFilmsAxios(id)
      dispatch(addFilmSucess(data));
    } catch (err) {
      dispatch(addFilmError());
    }
  };
