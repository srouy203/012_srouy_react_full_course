import React from "react";
import {
  FetchTeacherData,
  AddTeacherData,
  DeleteTeacherData,
  FetchTeacherDetail,
  EditTeacherDetail,
} from "./Hooks";
import {
  Text,
  Table,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  FormControl,
  Input,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Crud = () => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [school, setSchool] = useState("");

  const [editId, setEditId] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

  const teachers = FetchTeacherData();
  const { mutate: addTeacher } = AddTeacherData();
  const { mutate: deleteTeacher } = DeleteTeacherData();
  const { data: teacherDetail } = FetchTeacherDetail(editId);
  const { mutate: editTeacher } = EditTeacherDetail();

  const handleSubmit = () => {
    const data = { name, sex, school };
    addTeacher(data);
    onClose();
  };
  const handleDelete = (id) => {
    deleteTeacher(id);
  };

  const handleSave = () => {
    const editData = { name, sex, school };
    const id = editId;
    editTeacher({ id, editData });
    onCloseEdit();
  };

  useEffect(() => {
    setName(teacherDetail?.data.name);
    setSex(teacherDetail?.data.sex);
    setSchool(teacherDetail?.data.school);
  }, [teacherDetail]);

  return (
    <div>
      <motion.div
        style={{ height: "100%", overflow: "auto" }}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        exit={{ y: -20, opacity: 0 }}>
        <Text fontSize="4xl" align="center">
          Teachers Information
        </Text>
        <Button ml="20px" colorScheme="teal" onClick={onOpen} mb="10px">
          Add More
        </Button>
        <Table ml="20px">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Sex</Th>
              <Th>School</Th>
              <Th>More</Th>
            </Tr>
          </Thead>
          <Tbody>
            {teachers.data?.data.map(({ id, name, sex, school }) => {
              return (
                <Tr key={id}>
                  <Td>{id}</Td>
                  <Td>{name}</Td>
                  <Td>{sex}</Td>
                  <Td>{school}</Td>
                  <Td>
                    <Button
                      colorScheme="green"
                      onClick={() => {
                        setEditId(id);
                        onOpenEdit();
                      }}>
                      Edit
                    </Button>

                    <Button
                      colorScheme="red"
                      ml="10px"
                      onClick={() => handleDelete(id)}>
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>

        {/* Modal Add more information */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader align="center">Add More Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl mt="10px">
                <FormLabel>Sex</FormLabel>
                <RadioGroup>
                  <Radio value="Male" onChange={(e) => setSex(e.target.value)}>
                    Male
                  </Radio>
                  <Radio
                    value="Famale"
                    colorScheme="red"
                    onChange={(e) => setSex(e.target.value)}
                    ml="20px">
                    Famale
                  </Radio>
                </RadioGroup>
              </FormControl>
              <FormControl mt="10px">
                <FormLabel>School</FormLabel>
                <Input
                  placeholder="School"
                  onChange={(e) => setSchool(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Modal Edit teacher information */}

        <Modal isOpen={isOpenEdit} onClose={onCloseEdit}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader align="center">Edit Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl mt="10px">
                <FormLabel>Sex</FormLabel>
                <RadioGroup value={sex}>
                  <Radio value="Male" onChange={(e) => setSex(e.target.value)}>
                    Male
                  </Radio>
                  <Radio
                    value="Famale"
                    colorScheme="red"
                    onChange={(e) => setSex(e.target.value)}
                    ml="20px">
                    Famale
                  </Radio>
                </RadioGroup>
              </FormControl>
              <FormControl mt="10px">
                <FormLabel>School</FormLabel>
                <Input
                  placeholder="School"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onCloseEdit}>
                Close
              </Button>
              <Button colorScheme="blue" mr={3} onClick={handleSave}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </motion.div>
    </div>
  );
};

export default Crud;
