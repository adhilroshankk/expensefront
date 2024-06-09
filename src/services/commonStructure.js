import axios from "axios"

export const commonStructure=async(method,url,data)=>{
    let config={
        method,
        url,
        data
    }

    return axios(config).then(result=>{
        return result
    }).catch(result=>{
        return result
    }
    )
}