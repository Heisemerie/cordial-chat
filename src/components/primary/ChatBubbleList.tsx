import { VStack } from "@chakra-ui/react";
import ChatBubble from "./ChatBubble";
import { useEffect, useRef } from "react";

interface Props {
  chats: string[];
}

const LastBubble = (index: number, array: string[]) => {
  const lastBubble = index === array.length - 1;
  return lastBubble;
};

const ChatList = ({ chats }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [chats]);

  return (
    <VStack
      as="div"
      w={"768px"}
      gapY={6}
      h={"full"}
      overflow={"scroll"}
      scrollbarWidth={"none"}
    >
      {chats.map((chat, index) => (
        <ChatBubble
          text={chat}
          index={index}
          key={index}
          ref={LastBubble(index, chats) ? scrollRef : null}
        />
      ))}
    </VStack>
  );
};

export default ChatList;
