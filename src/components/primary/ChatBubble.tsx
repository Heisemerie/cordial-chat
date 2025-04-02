import { Box, HStack, Text } from "@chakra-ui/react";
import ClipBoardGroup from "./ClipBoardGroup";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  text?: string;
  index: number;
}

const ChatBubble = ({ text, index }: Props) => {
  const isUserPrompt = index % 2 === 0;

  return (
    <HStack
      w={"full"}
      justifyContent={isUserPrompt ? "flex-end" : "flex-start"}
      className="group"
    >
      <Box
        p={3}
        borderRadius={22}
        bg={isUserPrompt ? "bg.emphasized" : "none"}
        maxW={isUserPrompt ? "2/3" : "full"}
      >
        <Text>
          <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
        </Text>
        {!isUserPrompt && <ClipBoardGroup />}
      </Box>
    </HStack>
  );
};

export default ChatBubble;
