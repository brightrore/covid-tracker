import axios from "axios"

const urlGlobal = "https://covid19.mathdro.id/api"

export const tarikDataGlobal = async() => {
    try{
       const {data: {confirmed, recovered, deaths}}  = await axios.get(urlGlobal)
       return {confirmed, recovered, deaths}
    }catch (err){
        console.log(err)
    }
}