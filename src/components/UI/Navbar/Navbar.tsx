"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  useToast,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { trpc } from "@/app/trpc/client";

interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as='a'
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const router = useRouter();
  const logout = trpc.auth.Logout.useMutation({
    onSuccess(data) {
      router.push("/login");
      toast({
        description: data.message,
        status: data.status,
        position: "top-right",
        duration: 100000,
        isClosable: true,
      });
    },
    onError(data) {
      toast({
        description: data.message,
        status: "error",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
    },
  });
  const handlelogut = async () => {
    await logout.mutate();
    router.push("/login");
  };
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={"https://bit.ly/dan-abramov"} />
                </MenuButton>
                <MenuList alignItems={"center"} zIndex={9999}>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={handlelogut}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
