import { Stack } from "@chakra-ui/react";
import BottomSection from "./BottomSection";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";

const MainPanel = () => {
  return (
    <Stack h="full" flex={1}>
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </Stack>
  );
};

export default MainPanel;
