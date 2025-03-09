import { Center, Heading, HStack, VStack } from "@chakra-ui/react";
import PrompButtonList from "../components/primary/PrompButtonList";
import TextInput from "../components/primary/TextInput";
import useChats from "@/contexts/ChatsContext/useChats";
import ThinkingPage from "@/components/primary/ThinkingPage";

const HomePage = () => {
  const { thinking } = useChats();

  if (thinking) return <ThinkingPage />;

  return (
    <VStack gap={"6"}>
      <Heading size="3xl">What can I help with?</Heading>
      <Center>
        <TextInput />
      </Center>
      <HStack gap={"2"}>
        <PrompButtonList />
      </HStack>
    </VStack>
  );
};

export default HomePage;
