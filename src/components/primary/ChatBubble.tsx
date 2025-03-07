import { Box, HStack, Text } from "@chakra-ui/react";

interface Props {
  text: string;
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
      </Box>
    </HStack>
  );
};

export default ChatBubble;
