import axios from "axios"
import { useQuery } from "react-query"

const fetching_data = (id) => {
    // const id = queryKey[1]
    return axios.get(`http://localhost:3000/students/${id}`)
}

export const useFetchStudentDetail = (id) => {
    return useQuery(
        ['student',id],
        () => fetching_data(id)
    )
}


 