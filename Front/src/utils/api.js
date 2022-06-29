import Axios from 'axios'

const axios = Axios.create({
    baseURL: "https://dev-api-tutor.openinfra-kr.org",
    //baseURL: "http://localhost:5051",
    headers:{
        "Content-Type" : "application/json",

    },
    withCredentials : true,
})

export default axios;