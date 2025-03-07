import { Flex } from "@chakra-ui/react";
import CloseSideBarButton from "./CloseSideBarButton";
import NewChatButton from "./NewChatButton";

const MainPanelControls = () => {
  return (
    <Flex justify="space-between">
      <CloseSideBarButton />
      <NewChatButton />
    </Flex>
  );
};

export default MainPanelControls;
