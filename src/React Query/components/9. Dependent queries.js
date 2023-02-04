import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchUserDataByUserId = (userId) => {
    return axios.get(`http://localhost:3000/user/${userId}`)
}

const fetchMajorDataByMajorId = (majorId) => {
    return axios.get(`http://localhost:3000/major/${majorId}`)
}

const DependentQueries = ({ userId }) => {
    
    const { data: user } = useQuery(
        ['user', userId],
        () => fetchUserDataByUserId(userId)
    )

    // console.log(user)
    const majorId = user?.data.majorId
    // console.log(majorId);

    const { data: major } = useQuery(
        ['major', majorId],
        () => fetchMajorDataByMajorId(majorId),
        {
            enabled: !!majorId,
        }
    )
    console.log(major?.data.courses)
    
    return (
        <div className='container'>
            <h1 className='text-center'>Dependent Queries</h1>
            <h3>{majorId}</h3>
            {
                major?.data.courses.map((course, index) => {
                    return (
                        <p key={index}>{course}</p>
                    )
                })
            }
        </div>
    )
}

export default DependentQueries
