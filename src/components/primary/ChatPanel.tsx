import { VStack } from "@chakra-ui/react";
import ChatList from "./ChatList";
import TextInput from "./TextInput";

const ChatPanel = () => {
  return (
    <VStack h={"full"} maxW={"768px"}>
      <ChatList />
      <TextInput />
    </VStack>
  );
};

export default ChatPanel;
