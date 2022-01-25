import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import WalletConnectModal from "../components/WalletConnectModal";
import { useFeatureFlag } from "../hooks/useFeatureFlag";
import { getFeatureFlags } from "../services/lib/featureFlag";

interface PortfolioProps {
  flags: string[];
}

const Portfolio: NextPage<PortfolioProps> = (props) => {
  const { flags } = props;
  const { includes } = useFeatureFlag(flags);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center py={4} h={"70vh"}>
        <Stack>
          <Heading p={4}>Hello Portfolio Page</Heading>
          <Button isDisabled={!includes('connect')} size="lg" onClick={onOpen}>
            Connect Wallet
          </Button>
          <WalletConnectModal isOpen={isOpen} onClose={onClose}/>
        </Stack>
      </Center>
    </>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const flags = await getFeatureFlags();

  // By returning { props: { connectOn } }, the Home component
  // will receive `connectOn` as a prop at build time
  return {
    props: {
      flags,
    },
  };
}

export default Portfolio;
