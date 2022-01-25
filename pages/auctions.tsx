import {
  Box,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Switch,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useFeatureFlag } from "../hooks/useFeatureFlag";
import { getFeatureFlags } from "../services/lib/featureFlag";

// Props for anything in the pages folder will be returned by `getServerSideProps` or `getStaticProps`
interface AuctionsProps {
  flags: string[];
}

const Auctions: NextPage<AuctionsProps> = (props) => {
  const { flags } = props;
  const { includes } = useFeatureFlag(flags);
  
  const msg = includes('auctions') ? 'Hello Auctions Page' : 'This page is under construction..';

  return (
    <Center py={4} h={"70vh"}>
      <Stack>
        <Heading pt={4}>{msg}</Heading>
      </Stack>
    </Center>
  );
};

// This function tells Nextjs to render this page server side
export async function getServerSideProps() {
  // Fetch data from external API
  const flags = await getFeatureFlags();

  // Pass data to the page via props
  // NOTE: data sent to the page must be JSON serializable
  return { props: { flags } };
}

export default Auctions;
