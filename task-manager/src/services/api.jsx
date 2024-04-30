import axios from "axios";


const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8080/Almacenadora/v1",
    timeout: 5000
});


export const addTask = async (data) => {
    try{
        return await apiClient.post('/task', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}


export const getTasks = async () => {
    try{
        return await apiClient.get('/task')
    } catch(e){
        return{
            error: true,
            e
        }
    }
}