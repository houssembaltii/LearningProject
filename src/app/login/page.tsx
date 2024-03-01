"use client";
import { EmailField, PasswordField } from "@/components/Signupform/input";
import {
  Box,
  Button,
  Container,
  Stack,
  Center,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import { isEmail, isRequired } from "@formiz/validations";
import { trpc } from "../trpc/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = ({ params }: { params: any }) => {
  const router = useRouter();
  const toast = useToast();
  type loginCredentiels = {
    email: string;
    password: string;
  };
  const [credentials, setcredentials] = useState<loginCredentiels>();
  const sigin = trpc.auth.signin.useMutation({
    onSuccess(data) {
      toast({
        description: data.message,
        status: data.status,
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
      if (data.status === "success") {
        router.push("/home");
      }
    },
    onError() {
      toast({
        title: "error",
        description: "errreur",
      });
    },
  });

  const handleSubmit = (values: any) => {
    sigin.mutate(values);
  };
  const form = useForm({ onSubmit: handleSubmit, initialValues: credentials }); // create a new form
  return (
    <Container maxW='7xl' p={{ base: 5, md: 10 }}>
      <Center>
        <Stack spacing={4}>
          <Stack align='center'>
            <Heading fontSize='2xl'>Sign in to your account</Heading>
          </Stack>
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
        </Stack>
      </Center>
    </Container>
  );
};

export default Login;
