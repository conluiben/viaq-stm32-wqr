import axios from "axios"
// import 'dotenv/config'
// ! above only works for non-Vite (if NOT using vite preview), but Vite uses import.meta.env.*** for environment variable!

export default () => {
    return axios.create({
        baseURL: import.meta.env.VITE_SERVER_URL || "http://localhost:8089"
    })
}

// if it doesn't work, try http?