const { default:Axios } = require("axios");
const {RECURRENTE_SECRET_KEY,RECURRENTE_PUBLIC_KEY}=process.env
const axios = Axios.create({
    baseURL: 'https://app.recurrente.com/api',
  });
  
  axios.interceptors.request.use((config) => {
     config.headers={
        'X-PUBLIC-KEY':RECURRENTE_PUBLIC_KEY,
        'X-SECRET-KEY':RECURRENTE_SECRET_KEY
     }
    return config;
  }); 

module.exports=axios