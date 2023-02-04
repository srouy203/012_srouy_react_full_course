import { useQuery } from "react-query";
import axios from "axios";

const fetching_data = () => {
    return axios.get('http://localhost:3000/teachers')
}
export const useFetchTeacherData = () => {
    return useQuery(
        'teacher',
        fetching_data,
        {
            enabled: false,
        }
    )
}