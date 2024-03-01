import { Avatar, Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
  const btnRef = React.useRef();

  return (
    <VStack backgroundColor='blue.900' h='xl' w='2xs'>
      <Box h='sm' w='full'>
        <Flex gap={4}>
          <Avatar src='https://bit.ly/naruto-sage' size='sm' />
          <Box>
            <Text>HOussem Balti</Text>
            <Text>Status</Text>
          </Box>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Sidebar;
