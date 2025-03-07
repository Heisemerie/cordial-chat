import { Box, Stack } from "@chakra-ui/react";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";

const MainPanel = () => {
  return (
    <Box flex="1">
      <Stack h="full">
        <TopSection />
        <MiddleSection />
        <BottomSection />
      </Stack>
    </Box>
  );
};

export default MainPanel;
