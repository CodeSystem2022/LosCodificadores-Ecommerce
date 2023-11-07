import axios from 'axios'
export const useApi = ()=>{
    const URL = 'http://localhost:5000/'

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