import axios from "axios";


const axiosInstance = axios.create({
    // baseURL: "https://fakestoreapi.com/",
    baseURL: "http://localhost:9000",
  });
  
  export default axiosInstance;