import React,{useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChakraProvider,
  Stack,
  Input,
  Button,
  Center,
  Text,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { FetchTeacherDetail, EditTeacherDetail } from "./Hooks";
import { useEffect } from "react";
import FlamerMotion from "../../Chakra UI/components/Framer Motion";


const Edit = () => {
        const [name, setName] = useState("");
        const [sex, setSex] = useState("");
        const [school, setSchool] = useState("");
    const {id} = useParams()

    const navigate = useNavigate();

    const {data: teacherDetail , isLoading, isFetching} = FetchTeacherDetail(id)
    const {mutate: editTeacher} = EditTeacherDetail()

    useEffect(() => {
      setName(teacherDetail?.data.name);
      setSex(teacherDetail?.data.sex);
      setSchool(teacherDetail?.data.school);
    }, [teacherDetail]);

    const handleSave = () => {
        const editData = {name, sex, school}
        editTeacher({id, editData});
        navigate("/crud-query");
    }

    if(isLoading ||isFetching){
        return <FlamerMotion/>
    }
  return (
    <ChakraProvider>
      <div>
        <Text fontSize="4xl" align="center" mb="30px">
          Edit Teacher
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
            onClick={() => navigate("/crud-query")}
            leftIcon={<ArrowLeftIcon />}>
            Back
          </Button>
          <Button
            colorScheme="teal"
            mt="20px"
            ml="20px"
            onClick={handleSave}
            rightIcon={<ArrowRightIcon />}>
            Save
          </Button>
        </Center>
      </div>
    </ChakraProvider>
  );
};

export default Edit;
