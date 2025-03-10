import { Flex, HStack, Image } from "@chakra-ui/react";
import CordialDropDownMenu from "./CordialDropDownMenu";
import MainPanelControls from "./MainPanelControls";
import useToggle from "@/contexts/ToggleContext/useToggle";

const TopSection = () => {
  const { sideBarVisible } = useToggle();

  return (
    <Flex justify="space-between" align="center" p={2} w={"full"}>
      <HStack>
        {!sideBarVisible && <MainPanelControls />}
        <CordialDropDownMenu />
      </HStack>
      <Image src="/src/assets/Cordial Logo.png" boxSize={9} />
    </Flex>
  );
};

export default TopSection;
