import axios from "axios";

const client = axios.create({baseURL: 'http://localhost:3000' })

export const request = ({ ...options }) => {
    client.defaults.headers.common.Authorization = `Ang LeangSrouy`
    const onSuccess = (response) => response
    const onError = (error) => {
        return error
    }
    return client(options).then(onSuccess).catch(onError);
}
