import useToggle from "@/contexts/ToggleContext/useToggle";
import { Flex, HStack } from "@chakra-ui/react";
import CordialDropDownMenu from "./CordialDropDownMenu";
import MainPanelControls from "./MainPanelControls";
import SideBarDrawer from "./SideBarDrawer";

const TopSection = () => {
  const { sideBarVisible } = useToggle();

  return (
    <Flex justify="space-between" align="center" p={2} w={"full"}>
      <HStack gap={0}>
        {!sideBarVisible && <MainPanelControls />}
        <CordialDropDownMenu />
      </HStack>
      <SideBarDrawer />
    </Flex>
  );
};

export default TopSection;
