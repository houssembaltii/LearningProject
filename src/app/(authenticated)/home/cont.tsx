import { Container, Flex, VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const ContainerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxW='xl' padding={0}>
      <Flex h='100vh' py={20}>
        <VStack w='full' h='full' spacing={10} alignItems='flex-start'></VStack>
        {children}
      </Flex>
    </Container>
  );
};

export default ContainerLayout;
