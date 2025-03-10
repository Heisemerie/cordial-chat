import { VStack } from "@chakra-ui/react";
import ChatBubbleList from "../components/primary/ChatBubbleList";
import TextInput from "../components/primary/TextInput";

const ChatPage = () => {
  return (
    <VStack h={"full"} maxW={"768px"}>
      <ChatBubbleList />
      <TextInput />
    </VStack>
  );
};

export default ChatPage;
