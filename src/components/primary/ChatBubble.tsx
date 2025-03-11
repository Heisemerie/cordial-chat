import { Box, HStack, Text } from "@chakra-ui/react";
import ClipBoardGroup from "./ClipBoard";

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
    >
      <Box
        p={3}
        borderRadius={22}
        bg={isUserPrompt ? "bg.emphasized" : "none"}
        maxW={isUserPrompt ? "2/3" : "full"}
      >
        <Text>{text}</Text>
        {!isUserPrompt && <ClipBoardGroup />}
      </Box>
    </HStack>
  );
};

export default ChatBubble;
