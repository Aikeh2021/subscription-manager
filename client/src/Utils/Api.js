import axios from 'axios';


let config = {
	baseURL: '/api',
    headers: {}
}

const API = axios.create(config);

API.interceptors.request.use(existingConfig =>{
	if(localStorage.token){ // if we are logged in
    	existingConfig.headers.Authorization = `token ${localStorage.token}`;
    }
   return existingConfig;
} )




export default API;