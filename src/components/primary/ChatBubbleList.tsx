import useChats from "@/contexts/ChatsContext/useChats";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ChatBubble from "./ChatBubble";
import ThinkingSkeleton from "./ThinkingSkeleton";

const ChatBubbleList = () => {
  const { id } = useParams();
  const idToNumber = parseInt(id!);
  const { chats, thinking } = useChats();
  const bottomRef = useRef<HTMLDivElement>(null);

  console.log("chatlist", chats);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [thinking]);

  return (
    <Box flex={1} w={"full"} overflowY={"scroll"} scrollbarWidth={"none"}>
      {chats?.[idToNumber].history.map((chat, index) => (
        <ChatBubble text={chat.parts[0].text} index={index} key={index} />
      ))}
      {thinking && <ThinkingSkeleton />}
      <div ref={bottomRef} />
    </Box>
  );
};

export default ChatBubbleList;
