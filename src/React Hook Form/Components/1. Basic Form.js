import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Box, Text } from "@chakra-ui/react";
const BasicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch("name"));
  const name = watch("name");
  return (
    <Box>
      <Text fontSize="4xl" align="center">
        Basic Form
      </Text>
        <form action="" onSubmit={handleSubmit(onSubmit)} align="center">
          <Input htmlSize={50} w="auto" {...register("name")} />
          <br />
          <Input
            htmlSize={50}
            w="auton"
            {...register("work", {
              required: "Please input bro...",
              maxLength: { value: 4, message: "You exceeded the max length" },
            })}
          />

          <br />
          <Button type="submit" mt="20px">
            Submit
          </Button>
          <p>{errors.work && <small>{errors.work.message}</small>}</p>
        </form>
    </Box>
  );
};

export default BasicForm;
