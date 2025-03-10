import useToggle from "@/contexts/ToggleContext/useToggle";
import { Flex, HStack } from "@chakra-ui/react";
import CordialDropDownMenu from "./CordialDropDownMenu";
import MainPanelControls from "./MainPanelControls";

const TopSection = () => {
  const { sideBarVisible } = useToggle();

  return (
    <Flex justify="space-between" align="center" p={2} w={"full"}>
      <HStack>
        {!sideBarVisible && <MainPanelControls />}
        <CordialDropDownMenu />
      </HStack>
    </Flex>
  );
};

export default TopSection;
