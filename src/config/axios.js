import axios from "axios";



const instance = axios.create({
    baseURL:"http://138.68.88.207/api/",
})


export default instance;