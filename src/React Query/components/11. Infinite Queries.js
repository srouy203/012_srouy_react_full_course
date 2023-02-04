import React from 'react'
import { ChakraProvider, Text, Table, Thead, Tbody, Tr, Th, Td, Button, Progress } from '@chakra-ui/react'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import FlamerMotion from '../../Chakra UI/components/Framer Motion'
import { Fragment } from 'react'

const fetching_data = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:3000/teachers?_limit=2&_page=${pageParam}`)
}

const InfiniteQueries = () => {

    const {
        isLoading,
        isError,
        data,
        error,
        hasNextPage,
        fetchNextPage,
        isFetching,
        isFetchingNextPage
    } = useInfiniteQuery(
        'teacher',
        fetching_data,
        {
            getNextPageParam: (_lastPage, pages) => {
                if (pages.length < 4) {
                    return pages.length + 1
                } else {
                    return undefined
                }
            }
        }
    )

    console.log(data)

    if (isLoading) {
        return <FlamerMotion />
    }
    if (isError) {
        return <h1 className='text-center'>{error.message}</h1>
    }

    return (
        <ChakraProvider>
            <Text fontSize='4xl' textAlign='center'>Infinite Queries</Text>
            <Table mt='20px'>
                <Thead bg='teal.200'>
                    <Tr>
                        <Th>Id</Th>
                        <Th>Name</Th>
                        <Th>Sex</Th>
                        <Th>School</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        data?.pages.map((group, index) => {
                            return (
                                <Fragment key={index}>
                                    {
                                        group.data.map(({ id, name, sex, school }) => {
                                            return (
                                                <Tr key={id}>
                                                    <Td>{id}</Td>
                                                    <Td>{name}</Td>
                                                    <Td>{sex}</Td>
                                                    <Td>{school}</Td>
                                                </Tr>
                                            )
                                        })
                                    }
                                </Fragment>
                            )
                        })

                    }
                </Tbody>
            </Table>

            {
                isFetching ? (
                    <>
                        <Progress size='xs' isIndeterminate />
                        <Button
                            isLoading
                            loadingText='See More'
                            colorScheme='teal'
                            variant='outline'
                            spinnerPlacement='start'
                            mt='20px'
                            ml='20px'
                        >
                            See More
                        </Button>
                    </>
                ) : (
                    <Button
                        colorScheme='teal'
                        mt='20px'
                        ml='20px'
                        disabled={!hasNextPage}
                        onClick={fetchNextPage}
                    >See more</Button>
                )
            }


        </ChakraProvider>
    )
}

export default InfiniteQueries
