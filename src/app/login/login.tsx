"use client";
import { useEffect, useState } from "react";
import {
  Container,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Center,
  Checkbox,
  Link,
  useToast,
} from "@chakra-ui/react";
import { EmailField, PasswordField } from "@/components/Signupform/input";
import { Formiz, useForm } from "@formiz/core";

import { isEmail, isRequired } from "@formiz/validations";
import { trpc } from "../trpc/client";
import { useRouter } from "next/navigation";
const SimpleSignIn = () => {
  const [show, setShow] = useState(false);
  type loginCredentiels = {
    email: string;
    password: string;
  };
  const [credentials, setcredentials] = useState<loginCredentiels>();
  const router = useRouter();
  const toast = useToast();
  const sigin = trpc.auth.signin.useMutation({
    onSuccess(data, variables, context) {
      toast({
        title: data.status,
        description: data.message,
        status: data.status,
      });
      //  router.push("/home");
    },
    onError(data) {
      console.log("fama probleme");
      toast({
        title: "error",
        description: "errreur",
      });
    },
  });
  useEffect(() => {
    console.log(credentials);
    console.log("ahla");
  }, []);
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
          <VStack
            as='form'
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h='max-content !important'
            bg={useColorModeValue("white", "gray.700")}
            rounded='lg'
            boxShadow='lg'
            p={{ base: 5, sm: 10 }}
            spacing={8}
          >
            <VStack spacing={4} w='100%'>
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
            </VStack>
            <VStack w='100%'>
              <Stack direction='row' justifyContent='space-between' w='100%'>
                <Checkbox colorScheme='green' size='md'>
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: "md", sm: "md" }}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bg='green.300'
                color='white'
                _hover={{
                  bg: "green.500",
                }}
                rounded='md'
                w='100%'
              >
                Sign in
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Center>
    </Container>
  );
};

export default SimpleSignIn;
