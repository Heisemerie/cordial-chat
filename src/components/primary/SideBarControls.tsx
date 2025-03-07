import { Flex } from "@chakra-ui/react";
import CloseSideBarButton from "./CloseSideBarButton";
import NewChatButton from "./NewChatButton";

const SideBarControls = () => {
  return (
    <Flex justify="space-between">
      <CloseSideBarButton />
      <NewChatButton />
    </Flex>
  );
};

export default SideBarControls;
