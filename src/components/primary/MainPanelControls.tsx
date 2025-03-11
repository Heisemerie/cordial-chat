import { Flex } from "@chakra-ui/react";
import ToggleSideBarButton from "./ToggleSideBarButton";
import NewChatButton from "./NewChatButton";

const MainPanelControls = () => {
  return (
    <Flex justify="space-between" hideBelow={"md"}>
      <ToggleSideBarButton />
      <NewChatButton />
    </Flex>
  );
};

export default MainPanelControls;
