import Axios from 'axios'

const axios = Axios.create({
    baseURL: "http://dev-api-tutor.openinfra-kr.org",
    headers:{
        "Content-Type" : "application/json",

    },
    withCredentials: true,
})

export default axios;