import useChats from "@/contexts/ChatsContext/useChats";
import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import { Box } from "@chakra-ui/react";

const LastBubble = (index: number, array: string[]) => {
  const lastBubble = index === array.length - 1;
  return lastBubble;
};

const ChatList = () => {
  const { chats } = useChats();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [chats]);

  return (
    <Box flex={1}>
      {chats.map((chat, index) => (
        <ChatBubble
          text={chat}
          index={index}
          key={index}
          ref={LastBubble(index, chats) ? scrollRef : null}
        />
      ))}
    </Box>
  );
};

export default ChatList;
