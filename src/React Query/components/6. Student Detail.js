import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchStudentDetail } from '../hooks/2. useFetchStudentDetail'
import FlamerMotion from '../../Chakra UI/components/Framer Motion'
const StudentDetail = () => {
    const {id} = useParams()

    const {isLoading, isError, data, error} = useFetchStudentDetail(id)

    // const {isLoading, isError, data, error} = useInitialQuery(id)

    if(isLoading){
        return <FlamerMotion/>
    }
    if(isError){
        return <h2 className='text-center'>{error.message}</h2>
    }
  return (
    <div>
      <h1 className='text-center'>Student details</h1>
        <p className='text-center'>{id}. {data.data.name} / {data.data.sex} / {data.data.school}</p>
    </div>
  )
}

export default StudentDetail
