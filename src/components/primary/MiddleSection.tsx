import { Center, Heading, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import ChatList from "./ChatBubbleList";
import PrompButtonList from "./PrompButtonList";
import TextInput from "./TextInput";

const MiddleSection = () => {
  const [chats, setChats] = useState<string[]>([]);
  const noChats = chats.length === 0;

  return (
    <Center flex="1" overflow={"hidden"}>
      <VStack gap={"6"} h={chats.length === 0 ? undefined : "full"}>
        {noChats && <Heading size="3xl">What can I help with?</Heading>}
        <ChatList chats={chats} />
        <Center>
          <TextInput setChats={(text) => setChats([...chats, text])} />
        </Center>
        {noChats && (
          <HStack gap={"2"}>
            <PrompButtonList />
          </HStack>
        )}
      </VStack>
    </Center>
  );
};

export default MiddleSection;
