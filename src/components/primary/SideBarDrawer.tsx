import { SidebarIcon } from "@/icons/sidebar-icons";
import { IconButton } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "../ui/drawer";
import SideBarDrawerContent from "./SideBarDrawerContent";

const SideBarDrawer = () => {
  return (
    <DrawerRoot placement={"start"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton variant="ghost">
          <SidebarIcon fontSize="2xl" color="fg.muted" hideFrom={"md"} />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody display={"flex"}>
          <SideBarDrawerContent />
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default SideBarDrawer;
