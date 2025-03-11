import { Box, VStack } from "@chakra-ui/react";
import PromptInput from "./PromptInput";
import ThinkingSkeleton from "./ThinkingSkeleton";

const ThinkingPanel = () => {
  return (
    <VStack h={"full"} maxW={"768px"}>
      <Box flex={1} w={"full"} overflowY={"scroll"} scrollbarWidth={"none"}>
        <ThinkingSkeleton />
      </Box>
      <PromptInput />
    </VStack>
  );
};

export default ThinkingPanel;
