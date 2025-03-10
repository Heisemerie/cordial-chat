import { Flex } from "@chakra-ui/react";
import ToggleSideBarButton from "./ToggleSideBarButton";
import NewChatButton from "./NewChatButton";

const SideBarControls = () => {
  return (
    <Flex justify="space-between">
      <ToggleSideBarButton />
      <NewChatButton />
    </Flex>
  );
};

export default SideBarControls;
