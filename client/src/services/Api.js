import axios from "axios"
import https from 'https'
// import 'dotenv/config'
// ! above only works for non-Vite (if NOT using vite preview), but Vite uses import.meta.env.*** for environment variable!

//attempt to add HTTPS
// const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export default () => {
    return axios.create({
        baseURL: `${import.meta.env.VITE_SERVER_URL}` || "http://localhost:8089"
        // baseURL: `${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_PORT}` || "http://localhost:8089"
        // httpsAgent: httpsAgent
    })
}

// if it doesn't work, try http?