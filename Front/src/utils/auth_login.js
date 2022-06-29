import axios from "./api"

export default function setAuthorizationToken(token){
    if (token){
        axios.defaults.headers.common['Authorization']= `Bearer ${token}`;
        localStorage.setItem('jwt', token.token);
        console.log(token.refreshToken)
    }else{
        delete axios.defaults.headers.common['Authorization'];
        localStorage.removeItem('jwt');
        localStorage.clear();
    }
}