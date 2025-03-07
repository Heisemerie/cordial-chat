import { SidebarIcon } from "@/icons/sidebar-icons";
import { IconButton } from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";
import useToggle from "@/contexts/ToggleContext/useToggle";

const CloseSideBarButton = () => {
  const { sideBarVisible, setSidebarVisible } = useToggle();

  return (
    <Tooltip
      content="Close sidebar"
      positioning={{ placement: "right" }}
      showArrow
    >
      <IconButton
        variant="ghost"
        onClick={() => setSidebarVisible(!sideBarVisible)}
      >
        <SidebarIcon fontSize="2xl" color="fg.muted" />
      </IconButton>
    </Tooltip>
  );
};

export default CloseSideBarButton;
