import { Center, Heading, HStack, VStack } from "@chakra-ui/react";
import PrompButtonList from "../components/primary/PrompButtonList";
import PromptInput from "../components/primary/PromptInput";
import useChats from "@/contexts/ChatsContext/useChats";
import ThinkingPanel from "@/components/primary/ThinkingPanel";

const HomePage = () => {
  const { thinking } = useChats();

  if (thinking) return <ThinkingPanel />;

  return (
    <VStack gap={"6"}>
      <Heading size="3xl">What can I help with?</Heading>
      <Center>
        <PromptInput />
      </Center>
      <HStack gap={"2"}>
        <PrompButtonList />
      </HStack>
    </VStack>
  );
};

export default HomePage;
