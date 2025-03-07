import useChats from "@/contexts/ChatsContext/useChats";
import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import { Box } from "@chakra-ui/react";
import ThinkingSkeleton from "./ThinkingSkeleton";

const ChatList = () => {
  const { chats, loading } = useChats();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [loading]);

  return (
    <Box flex={1} w={"full"} overflowY={"scroll"} scrollbarWidth={"none"}>
      {chats.map((chat, index) => (
        <ChatBubble text={chat} index={index} key={index} />
      ))}
      {loading && <ThinkingSkeleton />}
      <div ref={bottomRef} />
    </Box>
  );
};

export default ChatList;
