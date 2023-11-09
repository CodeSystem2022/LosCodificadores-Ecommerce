import axios from 'axios'
export const useApi = ()=>{
    const URL = 'https://gamertech-backend.vercel.app/'

    const get = async (endpoint) => {
        try {
            const response = await axios.get(URL + endpoint)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    return {get}
}