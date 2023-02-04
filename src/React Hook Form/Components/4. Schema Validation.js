import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input, Text } from "@chakra-ui/react";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  website: yup.string().url(),
});

export default function SchemaValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      website: "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    console.log(data)
  };

  return (
    <>
      <Text fontSize="4xl" align="center">
        Schema Validation
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <Input {...register("firstName", {})} htmlSize={50} w="auto" />
          {errors.firstName && (
            <Text color="red">{errors.firstName.message}</Text>
          )}
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Last Name</label>
          <Input {...register("lastName")} htmlSize={50} w="auto" />
          {errors.lastName && (
            <Text color="red">{errors.lastName.message}</Text>
          )}
        </div>

        <div>
          <label>Age</label>
          <Input
            type="number"
            {...register("age", {
              valueAsNumber: true,
              keepValue: true,
            })}
            htmlSize={50}
            w="auto"
          />
          {errors.age && <Text color="red">{errors.age.message}</Text>}
        </div>

        <div>
          <label>Website</label>
          <Input {...register("website")} htmlSize={50} w="auto" />
          {errors.website && <Text color="red">{errors.website.message}</Text>}
        </div>
        <Input type="submit" w="200px" />
      </form>
    </>
  );
}
