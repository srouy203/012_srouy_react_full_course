import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import { useFetchStudentDetail } from '../hooks/2. useFetchStudentDetail';
import { useNavigate } from 'react-router-dom';
import FlamerMotion from "../../Chakra UI/components/Framer Motion";
import {useEditStudent} from '../hooks/5. useMutation'
import {
  ChakraProvider,
  Stack,
  Input,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useEffect } from 'react';

const MutationEdit = () => {
      const [name, setName] = useState("");
      const [sex, setSex] = useState("");
      const [school, setSchool] = useState("");
    const navigate = useNavigate()
    const {id} = useParams()

    const {data : student, isLoading, isFetching } = useFetchStudentDetail(id)

    
    const { mutate: editStudent } = useEditStudent()

    console.log(student?.data.name)

    useEffect(()=>{
        setName(student?.data.name)
        setSex(student?.data.sex);
        setSchool(student?.data.school);
    },[student])

    const handleSave = () => {
      console.log(name, sex, school);
      const data = {
        name,
        sex,
        school,
      };
      editStudent({id,data});
      navigate("/fetchdatastudent");
    };

    if(isLoading || isFetching){
      return <FlamerMotion />;
    }
  return (
    <ChakraProvider>
      <div>
        <Text fontSize="4xl" align="center" mb="30px">
          Edit Student
        </Text>
        <Center>
          <Stack spacing={3} width="50vw">
            <Input
              variant="filled"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              variant="filled"
              placeholder="Sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            />
            <Input
              variant="filled"
              placeholder="School"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </Stack>
        </Center>

        <Center>
          <Button
            colorScheme="red"
            mt="20px"
            onClick={() => navigate("/fetchdatastudent")}
            leftIcon={<ArrowLeftIcon />}>
            Back
          </Button>
          <Button 
            colorScheme="teal" 
            mt="20px" 
            ml="20px" 
            onClick={handleSave}
            rightIcon={<ArrowRightIcon/>}
            >
            Save
          </Button>
        </Center>
      </div>
    </ChakraProvider>
  );
}

export default MutationEdit;
