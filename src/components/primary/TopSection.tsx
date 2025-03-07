import { Flex, HStack } from "@chakra-ui/react";
import ChatGPTMenu from "./ChatGPTMenu";
import { Avatar } from "../ui/avatar";
import MainPanelControls from "./MainPanelControls";
import useToggle from "@/contexts/useToggle";

const TopSection = () => {
  const { sideBarVisible, setSidebarVisible } = useToggle();

  return (
    <Flex justify="space-between" align="center" p={2}>
      <HStack>
        {!sideBarVisible && (
          <MainPanelControls
            toggleSidebar={() => setSidebarVisible(!sideBarVisible)}
          />
        )}
        <ChatGPTMenu />
      </HStack>
      <Avatar
        name="Mbah Chiemerie"
        size="xs"
        colorPalette="teal"
        variant="solid"
        mr="3"
      />
    </Flex>
  );
};

export default TopSection;
