import axios from "axios";



const instance = axios.create({
    baseURL:"http://aldiyar-backender.org.kg/api/",
})


export default instance;