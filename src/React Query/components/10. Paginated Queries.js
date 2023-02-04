import React, {useState} from 'react'
import { ChakraProvider, Text, Button, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td, } from '@chakra-ui/react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import FlamerMotion from '../../Chakra UI/components/Framer Motion'

    const fetching_data = (page) => {
        return axios.get(`http://localhost:3000/teachers?_limit=2&_page=${page}`)
    }
    const fetching_data2 = () => {
        return axios.get(`http://localhost:3000/teachers`)
    }

const PaginatedQueries = () => {
    const [page, setPage] = useState(1)

    const { isLoading, data} = useQuery(
        ['teachers',page],
        () => fetching_data(page),
        {
            keepPreviousData: true
        }
    )

    const {data: teacher} = useQuery(
        'teacher2',
        fetching_data2
    )
    
    let lastpage = teacher?.data.length /2 ;

    
    if(isLoading){
        return <FlamerMotion/>
    }

    return (
        <ChakraProvider>
            <div className='container'>
                <Text fontSize='4xl' textAlign='center'>Paginated Queries</Text> 
                <Table mt='20px' mb='50px'>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Sex</Th>
                            <Th>School</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data?.data.map(({id,name,sex,school})=>{
                                return(
                                    <Tr key={id}>
                                        <Td>{id}</Td>
                                        <Td>{name}</Td>
                                        <Td>{sex}</Td>
                                        <Td>{school}</Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
                
                <Button 
                    leftIcon={<ArrowLeftIcon />}
                    colorScheme='red'
                    onClick={()=>setPage((page)=>page - 1 )}
                    disabled={page === 1}
                >Previous</Button>
                <Button 
                    rightIcon={<ArrowRightIcon/>}
                    colorScheme='teal'
                    onClick={()=>setPage((page)=>page + 1 )}
                    disabled={page ===lastpage}
                >Next</Button>
            </div>
        </ChakraProvider>
    )
}

export default PaginatedQueries
