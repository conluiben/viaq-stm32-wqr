import axios from "axios"

export default () => {
    return axios.create({
        baseURL: process.env.BASE_URL || "http://localhost:8081"
    })
}

// if it doesn't work, try http?