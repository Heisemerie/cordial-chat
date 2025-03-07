import { SidebarIcon, NewChatIcon } from "@/icons/sidebar-icons";
import { Flex, IconButton } from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";

interface Props {
  toggleSidebar: () => void;
}

const MainPanelControls = ({ toggleSidebar }: Props) => {
  return (
    <Flex justify="space-between">
      <Tooltip
        content="Open sidebar"
        positioning={{ placement: "right" }}
        showArrow
      >
        <IconButton variant="ghost" onClick={toggleSidebar}>
          <SidebarIcon fontSize="2xl" color="fg.muted" />
        </IconButton>
      </Tooltip>
      <Tooltip content="New chat" showArrow>
        <IconButton variant="ghost">
          <NewChatIcon fontSize="2xl" color="fg.muted" />
        </IconButton>
      </Tooltip>
    </Flex>
  );
};

export default MainPanelControls;
