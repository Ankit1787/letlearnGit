
import Axios from "../utils/axiosInstance";
export const getMethod=async(route)=>{
    try {
        const response=await Axios.get(route);
        console.log(response);
        return response.data;
      
        
    } catch (error) {

    return new Error(error?.response?.data?.message||"something went wrong")
        
    }

}
export const postMethod=async(route,body)=>{
    try {
        const response=await Axios.post(route,body);
        return response.data;


    } catch (error) {

    return new Error(error?.response?.data?.message||"something went wrong")

    }

}

