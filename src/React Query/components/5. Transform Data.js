import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetching_data = () => {
    return axios.get('http://localhost:3000/students')
}

const TransformData = () => {

    const { isLoading, isError, data, error } = useQuery(
        'student',
        fetching_data,
        {
            select: (data) => {
                const studentName = data.data.map((student) => student.name);
                return studentName;
            }
        }
    )

    console.log(data);

    if (isLoading) {
        return <h2 className='text-center'>Loading...</h2>
    }
    if (isError) {
        return <h2 className='text-center'>{error.message}</h2>
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Tranformation name of students</h1>
            <table className='table text-center table-hover'>
                <thead className='thead bg-secondary'>
                    <tr>
                        <th className='text-light'>Name of Students</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((student,index) => {
                            return (
                                <tr key={index}>
                                    <td>{student}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default TransformData
