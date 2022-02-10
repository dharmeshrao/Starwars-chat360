import { ADDVEHICLESLOADING , ADDVEHICLESSUCESS , ADDVEHICLESERROR } from './actionTypes'
export const addVehiclesLoading = ()=>({type:ADDVEHICLESLOADING});
export const addVehiclesSucess = (data)=>({type:ADDVEHICLESSUCESS,payload:data});
export const addVehiclesError = (data)=>({type:ADDVEHICLESERROR,payload:data});