import { base_url } from "./baseUrl"
import { commonStructure } from "./commonStructure"


export const getUsers=async()=>{
    return  await commonStructure("GET",`${base_url}/users`,{})
  }

  export const addUser=async(body)=>{
    return await commonStructure("POST",`${base_url}/users`,body)
 }