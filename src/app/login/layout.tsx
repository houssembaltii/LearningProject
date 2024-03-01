import { Flex } from "@chakra-ui/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "signup page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      direction='column'
      overflowX='auto'
      justify='center'
      alignItems='center'
      minH='100vh'
      w='full'
      maxW='100vw'
    >
      {children}
    </Flex>
  );
}
