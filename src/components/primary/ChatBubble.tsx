import { Box, HStack, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

interface Props {
  text: string;
  index: number;
}

const ChatBubble = forwardRef<HTMLDivElement, Props>(({ text, index }: Props, ref) => {
  const isUserPrompt = index % 2 === 0;

  return (
    <HStack as='div'
      w={"full"}
      justifyContent={isUserPrompt ? "flex-end" : "flex-start"}
      ref={ref}
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
})

export default ChatBubble;
