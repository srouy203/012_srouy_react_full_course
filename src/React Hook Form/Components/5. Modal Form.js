import React, { useState, useRef } from "react";
import {
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  useToast,
  InputGroup,
  useColorModeValue as mode,
  HStack,
  IconButton,
  InputRightElement,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
// import { HiEye, HiEyeOff } from "react-icons/hi";
import { useForm, Controller } from "react-hook-form";

const ModalForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const password = useRef({});

  const {
    handleSubmit: handleSubmitPW,
    control: controlPW,
    formState: { errors },
    watch,
  } = useForm();

  password.current = watch("password", "");
  const onSubmitPW = (value) => {
    let formData = new FormData();
    formData.append("newPassword", value.newPassword);
    formData.append("oldPassword", value.oldPassword);
    // console.log("Hello", formData);
    console.log(value.newPassword)
    console.log(value.oldPassword);
  };
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom">
        <ModalOverlay />
        <form onSubmit={handleSubmitPW(onSubmitPW)}>
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <HStack>
                  <FormLabel>
                    New Password <b>*</b>
                  </FormLabel>
                  {errors.newPassword?.type === "required" && (
                    <Text
                      fontSize="sm"
                      m="0 0 6px -5px !important"
                      color={mode("red.500", "red.400")}>
                      {errors.newPassword.message}
                    </Text>
                  )}
                  {errors.newPassword?.type === "minLength" && (
                    <Text
                      fontSize="sm"
                      m="0 0 6px -5px !important"
                      color={mode("red.500", "red.400")}>
                      Password must more than 8
                    </Text>
                  )}
                </HStack>
                <InputGroup>
                  <Controller
                    name="newPassword"
                    control={controlPW}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="password"
                        _placeholder={{ color: "gray.500" }}
                        bg={mode("inherit", "gray.600")}
                      />
                    )}
                    rules={{
                      required: "You must specify a password",
                      minLength: 8,
                    }}
                  />
                  <InputRightElement>
                    <IconButton
                      bg="transparent !important"
                      color="gray.400"
                      _hover={mode("inherit", "gray.600")}
                      variant="ghost"
                      //   icon={showPassword ? <HiEye /> : <HiEyeOff />}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl>
                <HStack>
                  <FormLabel>
                    Confirm Password <b>*</b>
                  </FormLabel>
                  {errors.confirmPassword && (
                    <Text
                      m="0 0 6px -5px !important"
                      fontSize="sm"
                      color={mode("red.500", "red.400")}>
                      {errors.confirmPassword.message}
                    </Text>
                  )}
                </HStack>
                <Controller
                  name="confirmPassword"
                  control={controlPW}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="password"
                      placeholder="password"
                      _placeholder={{ color: "gray.500" }}
                      bg={mode("inherit", "gray.600")}
                    />
                  )}
                  rules={{
                    validate: (value) =>
                      value === password.current || "passwords not match",
                    required: true
                  }}
                />
              </FormControl>
              <FormControl>
                <HStack>
                  <FormLabel>
                    Old Password <b>*</b>
                  </FormLabel>
                  {errors.oldPassword && (
                    <Text
                      m="0 0 6px -5px !important"
                      fontSize="sm"
                      color={mode("red.500", "red.400")}>
                      {errors.oldPassword.message}
                    </Text>
                  )}
                </HStack>
                <Controller
                  name="oldPassword"
                  control={controlPW}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="password"
                      placeholder="password"
                      _placeholder={{ color: "gray.500" }}
                      bg={mode("inherit", "gray.600")}
                    />
                  )}
                  rules={{}}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}>
                Reset
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default ModalForm;
