"use client";
import { EmailField, PasswordField } from "@/components/Signupform/input";
import { Box, Button, Text } from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import { isEmail, isRequired } from "@formiz/validations";
import { trpc } from "../trpc/client";

const SignupForm = () => {
  const adduser = trpc.auth.signup.useMutation({
    onSuccess(data, variables, context) {
      console.log("success");
    },
  });

  const handleSubmit = (values: any) => {
    adduser.mutate(values);
  };
  const form = useForm({ onSubmit: handleSubmit }); // create a new form
  return (
    <Box maxW='sm'>
      <Formiz connect={form} autoForm>
        <EmailField
          name='email'
          validations={[
            {
              handler: isEmail(),
              message: "Email is invalid",
            },
          ]}
        />
        <PasswordField
          name='password'
          validations={[
            {
              handler: isRequired(),
              message: "password is invalid",
            },
          ]}
        />
        <Button type='submit' mt={2}>
          Submit
        </Button>
      </Formiz>
    </Box>
  );
};

export default SignupForm;
