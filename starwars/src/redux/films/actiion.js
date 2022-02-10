import { ADDFILMLOADING , ADDFILMSUCESS , ADDFILMERROR } from './actionTypes'
export const addFilmLoading = ()=>({type:ADDFILMLOADING});
export const addFilmSucess = (data)=>({type:ADDFILMSUCESS,payload:data});
export const addFilmError = (data)=>({type:ADDFILMERROR,payload:data});
