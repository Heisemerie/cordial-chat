import { VStack } from "@chakra-ui/react";
import ChatList from "../components/primary/ChatList";
import TextInput from "../components/primary/TextInput";

const ChatPage = () => {
  return (
    <VStack h={"full"} maxW={"768px"}>
      <ChatList />
      <TextInput />
    </VStack>
  );
};

export default ChatPage;
