import useChats from "@/contexts/ChatsContext/useChats";
import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";
import { Box } from "@chakra-ui/react";
import ThinkingSkeleton from "./ThinkingSkeleton";

const ChatList = () => {
  const { chats, thinking } = useChats();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [thinking]);

  return (
    <Box flex={1} w={"full"} overflowY={"scroll"} scrollbarWidth={"none"}>
      {chats.map((chat, index) => (
        <ChatBubble text={chat} index={index} key={index} />
      ))}
      {thinking && <ThinkingSkeleton />}
      <div ref={bottomRef} />
    </Box>
  );
};

export default ChatList;
