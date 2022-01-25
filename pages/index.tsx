import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Switch,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import React, { useEffect } from "react";

const Home: NextPage = (props) => {
  return (
    <Center py={4} h={"70vh"}>
      <Stack>
        <Heading p={4}>Hello Drops Page</Heading>
      </Stack>
    </Center>
  );
};

export default Home;
