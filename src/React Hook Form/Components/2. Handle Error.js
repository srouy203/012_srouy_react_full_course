import { useForm } from "react-hook-form";
import { Input, Select, Text, Box } from "@chakra-ui/react";

export default function HandleError() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    delayError: 1000,
    defaultValues: {
      firstName: "Srouy",
      gender: "male",
    },
  });
  const submit = (data) => console.log(data);

  return (
    <>
      <Text fontSize="4xl" align="center">
        Register Field
      </Text>
      <Box ml="250px" w="50vw">
        <form onSubmit={handleSubmit(submit)}>
          <Input
            {...register("firstName", {
              required: "Please Input",
              maxLength: { value: 4, message: "less than 4 bro" },
              min: 18,
              max: 99,
            })}
            htmlSize={50}
            w="auto"
          />
          {/* <p>{errors.firstName && errors.firstName.message}</p> */}
          <p>
            {errors?.firstName?.type === "required" && errors.firstName.message}
          </p>
          <p>{errors?.firstName?.type === "maxLength" && "Less than 4 only"}</p>
          <p>{errors.firstName && "Number must from 18 - 99"}</p>

          <Select {...register("gender")} w="200px" mt="20px">
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </Select>
          <Input type="submit" htmlSize={50} w="auto" mt="20px" />
        </form>
      </Box>
    </>
  );
}
