import { VStack } from "@chakra-ui/react";
import ChatBubbleList from "./ChatList";
import TextInput from "./TextInput";

const ChatPanel = () => {
  return (
    <VStack
      gap={6}
      h={"full"}
      overflowY={"scroll"}
      scrollbarWidth={"none"}
      maxW={"768px"}
    >
      <ChatBubbleList />
      <TextInput />
    </VStack>
  );
};

export default ChatPanel;
