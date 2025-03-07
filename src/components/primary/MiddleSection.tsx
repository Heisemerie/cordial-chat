import { Center, Heading, HStack, VStack } from "@chakra-ui/react";

import PrompButtonList from "./PrompButtonList";
import TextInput from "./TextInput";

const MiddleSection = () => {
  return (
    <Center flex="1">
      <VStack gap={"6"}>
        <Heading size="3xl">What can I help with?</Heading>
        <Center>
          <TextInput />
        </Center>
        <HStack gap={"2"}>
          <PrompButtonList />
        </HStack>
      </VStack>
    </Center>
  );
};

export default MiddleSection;
