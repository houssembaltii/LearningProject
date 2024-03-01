import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Divider,
  Flex,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Cardslist = () => {
  return (
    <>
      <Container maxW='full' maxH='' overflowY='scroll' h='xl'>
        <VStack>
          <Card>
            <CardHeader>
              <Text>Name</Text>
            </CardHeader>
            <Divider />
            <CardBody>
              <Stack>
                <Box>
                  <Text noOfLines={4} textOverflow='ellipsis'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    feugiat elit ac commodo aliquet. Nam sapien odio, semper
                    venenatis ligula id, vehicula porta orci. Aliquam leo
                    tortor, tincidunt vitae quam non, interdum volutpat turpis.
                    Quisque eu luctus est, at dictum purus. In eu enim nec nisl
                    convallis tempor quis quis eros.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card shadow='md' borderWidth='1px'>
            <CardHeader>
              <Text>Name</Text>
            </CardHeader>
            <Divider />
            <CardBody>
              <Stack>
                <Box>
                  <Text noOfLines={4} textOverflow='ellipsis'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    feugiat elit ac commodo aliquet. Nam sapien odio, semper
                    venenatis ligula id, vehicula porta orci. Aliquam leo
                    tortor, tincidunt vitae quam non, interdum volutpat turpis.
                    Quisque eu luctus est, at dictum purus. In eu enim nec nisl
                    convallis tempor quis quis eros.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Text>Name</Text>
            </CardHeader>
            <Divider />
            <CardBody>
              <Stack>
                <Box>
                  <Text noOfLines={1} textOverflow='ellipsis'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    feugiat elit ac commodo aliquet. Nam sapien odio, semper
                    venenatis ligula id, vehicula porta orci. Aliquam leo aze
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    feugiat elit ac commodo aliquet. Nam sapien odio, semper
                    venenatis ligula id, vehicula porta orci. Aliquam leo aze
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Text>Name</Text>
            </CardHeader>
            <Divider />
            <CardBody>
              <Stack>
                <Box>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    feugiat elit ac commodo aliquet. Nam sapien odio, semper
                    venenatis ligula id, vehicula porta orci. Aliquam leo
                    tortor, tincidunt vitae quam non, interdum volutpat turpis.
                    Quisque eu luctus est, at dictum purus. In eu enim nec nisl
                    convallis tempor quis quis eros.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Text>Name</Text>
            </CardHeader>
            <Divider />
            <CardBody>
              <Stack>
                <Box>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    feugiat elit ac commodo aliquet. Nam sapien odio, semper
                    venenatis ligula id, vehicula porta orci. Aliquam leo
                    tortor, tincidunt vitae quam non, interdum volutpat turpis.
                    Quisque eu luctus est, at dictum purus. In eu enim nec nisl
                    convallis tempor quis quis eros.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </>
  );
};
export default Cardslist;
