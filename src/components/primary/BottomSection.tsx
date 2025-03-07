import { Box, Center } from "@chakra-ui/react";

const BottomSection = () => {
  return (
    <Box pb="2" w={'full'}>
      <Center fontSize={"xs"} color={"fg.muted"}>
        ChatGPT can make mistakes. Check important info.
      </Center>
    </Box>
  );
};

export default BottomSection;
