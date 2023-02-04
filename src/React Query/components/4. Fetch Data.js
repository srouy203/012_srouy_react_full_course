import React from "react";
import { useFetchStudentData } from "../hooks/1. useFetchStudentData";
import { useAddStudent, useDeleteStudent } from "../hooks/5. useMutation";
import { Link } from "react-router-dom";
import {
  ChakraProvider,
  Text,
  Stack,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import {motion} from 'framer-motion'
import { useState } from "react";

const FetchData = () => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [school, setSchool] = useState("");

  const onSuccess = (data) => {
    console.log("Fetching Success", data);
  };
  const onError = (error) => {
    console.log("Fetching Error", error);
  };

  const { isLoading, isError, data, isFetching, refetch, error } =
    useFetchStudentData(onSuccess, onError);

  // console.log('loading: ', isLoading, 'Fetching:', isFetching);

  const { mutate: addStudent } = useAddStudent();
  const { mutate: deleteStudent } = useDeleteStudent();

  const handSubmit = () => {
    const data = {
      name,
      sex,
      school,
    };
    addStudent(data);
  };

  const handleDelete = (id) => {
    // console.log(id);
    deleteStudent(id);
    // data?.data.filter((val) => val.id === id);
  };

  if (isError) {
    return <h2 className="text-center">{error.message}</h2>;
  }

  return (
    <ChakraProvider>
      <motion.div
        style={{ height: "100%", overflow: "auto" }}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        exit={{ y: -20, opacity: 0 }}>
        <div className="container">
          <Text align="center" fontSize="4xl" mb="20px">
            RQ Student List
          </Text>
          <Center>
            <Stack spacing={3} width="50vw">
              <Input
                variant="filled"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                variant="filled"
                placeholder="Sex"
                onChange={(e) => setSex(e.target.value)}
              />
              <Input
                variant="filled"
                placeholder="School"
                onChange={(e) => setSchool(e.target.value)}
              />
            </Stack>
          </Center>
          <Center>
            <Button colorScheme="teal" mt="20px" onClick={handSubmit}>
              Submit
            </Button>
          </Center>
          <br />

          <button onClick={refetch} className="btn btn-primary">
            Show Student
          </button>
          {isLoading || isFetching ? (
            <Text align="center" fontSize="4xl">
              Loading...
            </Text>
          ) : (
            <table className="table table-hover mt-4">
              <thead className="thead bg-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Sex</th>
                  <th>School</th>
                  <th>More</th>
                </tr>
              </thead>
              <tbody>
                {data?.data.map(({ id, name, sex, school }) => {
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>
                        <Link to={`/fetchdatastudent/${id}`}>{name}</Link>
                      </td>
                      <td>{sex}</td>
                      <td>{school}</td>
                      <td>
                        <Link to={`/mutation-edit/${id}`}>
                          <Button colorScheme="green">Update</Button>
                        </Link>
                        <Button
                          ml="10px"
                          colorScheme="red"
                          onClick={() => handleDelete(id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </motion.div>
    </ChakraProvider>
  );
};

export default FetchData;
