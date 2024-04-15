import axios from "axios";

export const api = axios.create({
    baseURL:"https://api-elian-app.vercel.app/api/v1",
    withCredentials:true,
    headers:{ "Content-Type": "application/json" },
})