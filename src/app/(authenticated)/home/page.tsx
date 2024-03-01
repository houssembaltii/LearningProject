"use client";
import React from "react";
import { Box, Button, Container, Flex, VStack } from "@chakra-ui/react";

import WithSubnavigation from "@/components/UI/Navbar/Navbar";
import Cardslist from "@/components/UI/cardslist/Cardslist";
import SidebarWithHeader from "@/components/UI/sidebar/sidebar";
const onClose = () => {};
const HomePage = () => {
  return (
    <>
      <WithSubnavigation />
      <Container maxW='full' padding={0}>
        <Flex h='100vh' gap={10} flex='1'>
          <Flex
            w='full'
            h='full'
            gap={10}
            alignItems='flex-start'
            flex='1'
            px={4}
            py={4}
          >
            <SidebarWithHeader />
            <VStack w='sm' flex='1' py={10}>
              <Cardslist />
            </VStack>
          </Flex>
          <VStack
            w='full'
            h='full'
            spacing={10}
            alignItems='flex-end'
            flex='1'
            py={10}
          >
            Hello world
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default HomePage;
