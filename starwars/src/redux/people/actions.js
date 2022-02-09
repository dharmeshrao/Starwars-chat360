import { ADDPEOPLELOADING , ADDPEOPLESUCESS , ADDPEOPLEERROR } from './actionTypes'
export const addPeopleLoading = ()=>({type:ADDPEOPLELOADING});
export const addPeopleSucess = (data)=>({type:ADDPEOPLESUCESS,payload:data});
export const addPeopleError = (data)=>({type:ADDPEOPLEERROR,payload:data});