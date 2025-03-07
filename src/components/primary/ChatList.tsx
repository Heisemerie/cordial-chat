import useChats from "@/contexts/ChatsContext/useChats";
import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import { Box } from "@chakra-ui/react";
import ThinkingSkeleton from "./ThinkingSkeleton";

const LastBubble = (index: number, array: string[]) => {
  const lastBubble = index === array.length - 1;
  return lastBubble;
};

const ChatList = () => {
  const { chats, loading } = useChats();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [chats]);

  return (
    <Box flex={1} w={"full"}>
      {chats.map((chat, index) => (
        <ChatBubble
          text={chat}
          index={index}
          key={index}
          ref={LastBubble(index, chats) ? scrollRef : null}
        />
      ))}
      {loading && <ThinkingSkeleton />}
    </Box>
  );
};

export default ChatList;
