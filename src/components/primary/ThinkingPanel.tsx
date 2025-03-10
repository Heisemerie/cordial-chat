import { Box, VStack } from "@chakra-ui/react";
import TextInput from "./TextInput";
import ThinkingSkeleton from "./ThinkingSkeleton";

const ThinkingPanel = () => {
  return (
    <VStack h={"full"} maxW={"768px"}>
      <Box flex={1} w={"full"} overflowY={"scroll"} scrollbarWidth={"none"}>
        <ThinkingSkeleton />
      </Box>
      <TextInput />
    </VStack>
  );
};

export default ThinkingPanel;
