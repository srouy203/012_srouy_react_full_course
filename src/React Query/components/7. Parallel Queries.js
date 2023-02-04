import React from 'react'
import { useFetchStudentData } from '../hooks/1. useFetchStudentData'
import { useFetchTeacherData } from '../hooks/3. useFetchTeacherData'
import FlamerMotion from '../../Chakra UI/components/Framer Motion'

const ParallelQueries = () => {

    const { 
        isLoading: studentLoading,
        isError: studentErr, 
        isFetching:studentFetching, 
        data: students, 
        refetch: reFetchStu
    } = useFetchStudentData();

    const { 
        isLoading: teacherLoading,
        isError: teacherErr,
        isFetching: teacherFetching,
        data: teachers, 
        refetch: reFetchTeach 
    } = useFetchTeacherData()

    console.log(students);
    console.log(teachers);

    if(studentLoading || studentFetching){
        return <FlamerMotion/>
    }
    if(teacherLoading || teacherFetching){
        return <FlamerMotion/>
    }
    if (studentErr) {
        return <h2 className='text-center'>Error Fetching Students Data...</h2>
    }
    if(teacherErr) {
        return <h2 className='text-center'>Error Fetching Teachers Data...</h2>
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Student and Teacher Data</h1>
            <button
                className='btn btn-secondary mb-3'
                onClick={() => reFetchStu()}
            >Show Student Data</button>
            <button
                className='btn btn-primary mb-3 mx-3'
                onClick={() => reFetchTeach()}
            >Show Teacher Data
            </button>
            <table className='table table-hover'>
                {
                    students && (
                        <thead className='thead bg-secondary'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Sex</th>
                                <th>School</th>
                            </tr>
                        </thead>)
                }
                <tbody>
                    {
                        students?.data.map(({ id, name, sex, school }) => {
                            return (
                                <tr>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{sex}</td>
                                    <td>{school}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                {
                    teachers && (<thead className='thead bg-primary'>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Sex</th>
                            <th>School</th>
                        </tr>
                    </thead>)
                }
                <tbody>
                    {
                        teachers?.data.map(({ id, name, sex, school }) => {
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{sex}</td>
                                    <td>{school}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>



        </div>
    )
}

export default ParallelQueries
