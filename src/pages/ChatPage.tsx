import { VStack } from "@chakra-ui/react";
import ChatBubbleList from "../components/primary/ChatBubbleList";
import PromptInput from "../components/primary/PromptInput";

const ChatPage = () => {
  return (
    <VStack h={"full"} maxW={"768px"}>
      <ChatBubbleList />
      <PromptInput />
    </VStack>
  );
};

export default ChatPage;
