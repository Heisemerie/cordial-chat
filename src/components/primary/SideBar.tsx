import { Box, Stack } from "@chakra-ui/react";
import ChatGptButton from "./ChatGPTButton";
import ExploreGptButton from "./ExploreGPTButton";
import UpgradePlanButton from "./UpgradePlanButton";
import SideBarControls from "./SideBarControls";
import useToggle from "@/contexts/useToggle";

const SideBar = () => {
  const { sideBarVisible, setSidebarVisible } = useToggle();

  return (
    <Box
      bg="bg.muted"
      w={!sideBarVisible ? "0" : "260px"}
      overflow="hidden"
      transition="width 0.3s"
    >
      <Stack h="full" px="3" py="2">
        <SideBarControls
          toggleSidebar={() => setSidebarVisible(!sideBarVisible)}
        />

        <Stack px="2" gap="0" flex="1">
          <ChatGptButton />
          <ExploreGptButton />
        </Stack>

        <UpgradePlanButton />
      </Stack>
    </Box>
  );
};

export default SideBar;
