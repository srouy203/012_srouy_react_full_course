import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

const fetching_data = (id) => {
    return axios.get(`http://localhost:3000/students/${id}`)
}

const useInitialQuery = (id) => {
    const queryClient = useQueryClient()
    return useQuery(
        ['student', id], 
        () => fetching_data(id),
        {
            initialData: () => {
                const student = queryClient
                    .getQueryData('students')
                    ?.data?.find((student) => student.id === parseInt(id))

                    if(student){
                        return{
                            data: student
                        }
                    }else{
                        return undefined
                    }
            },
        }
    
    )
    
}

export default useInitialQuery
