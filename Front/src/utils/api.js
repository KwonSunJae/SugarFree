import Axios from 'axios'

const axios = Axios.create({
    baseURL: "http://dev-api-tutor.openifra-kr.org:5051",
    headers:{
        "Content-Type" : "application/json",

    },
    withCredentials: true,
})

export default axios;