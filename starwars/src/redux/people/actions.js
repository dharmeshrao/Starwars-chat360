import { getPeopleAxios } from '../../components/utils/Axios';
import { ADDPEOPLELOADING , ADDPEOPLESUCESS , ADDPEOPLEERROR } from './actionTypes'
export const addPeopleLoading = ()=>({type:ADDPEOPLELOADING});
export const addPeopleSucess = (data)=>({type:ADDPEOPLESUCESS,payload:data});
export const addPeopleError = (data)=>({type:ADDPEOPLEERROR,payload:data});
export const fetchData = async (dispatch) => {
    dispatch(addPeopleLoading());
    try {
      const { data } = await getPeopleAxios()
      dispatch(addPeopleSucess(data));
    } catch (err) {
      dispatch(addPeopleError());
    }
  };
