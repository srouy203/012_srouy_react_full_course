import React from 'react'
import { useQueries } from 'react-query';
import axios from 'axios';

const fetching_data = (id) => {
    return axios.get(`http://localhost:3000/students/${id}`)
}

const DynamicParallelQueries = ({ stuIds }) => {

    const student = useQueries(
        stuIds.map(id => {
            return {
                queryKey: ['student', id],
                queryFn: () => fetching_data(id)
            }
        })
    )

    // console.log(student[0].data?.data)

    // console.log(student[1].data?.data)

    console.log(student.map(a => a.data?.data.name))

    return (
        <div className='container'>
            <h1 className='text-center'>DynamicParallelQueries</h1>


            <table className='table table-hover'>
                <thead className='thead bg-secondary'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Sex</th>
                        <th>Schhol</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((a, index) => {
                            return (
                                <tr key={index}>
                                    <td>{a.data?.data.id}</td>
                                    <td>{a.data?.data.name}</td>
                                    <td>{a.data?.data.sex}</td>
                                    <td>{a.data?.data.school}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default DynamicParallelQueries
