import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://api.fakestorejson.com/api/v1/public",
  });
  
  export default axiosInstance;