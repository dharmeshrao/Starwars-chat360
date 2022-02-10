import { ADDSTARSHIPLOADING , ADDSTARSHIPSUCESS , ADDSTARSHIPERROR } from './actionTypes'
export const addStarshipsLoading = ()=>({type:ADDSTARSHIPLOADING});
export const addStarshipsSucess = (data)=>({type:ADDSTARSHIPSUCESS,payload:data});
export const addStarshipsError = (data)=>({type:ADDSTARSHIPERROR,payload:data});