import axios from "./api"

export default function setAuthorizationToken(token){
    if (token){
        axios.defaults.headers.common['Authorization']= `Bearer ${token}`;
        sessionStorage.setItem('jwt', token);
    }else{
        delete axios.defaults.headers.common['Authorization'];
        sessionStorage.removeItem('jwt');
        sessionStorage.clear();
    }
}