import { Box, Stack } from "@chakra-ui/react";
import ChatGptButton from "./ChatGPTButton";
import ExploreGptButton from "./ExploreGPTButton";
import UpgradePlanButton from "./UpgradePlanButton";
import SideBarControls from "./SideBarControls";
import useToggle from "@/contexts/ToggleContext/useToggle";
import useChats from "@/contexts/ChatsContext/useChats";
import SideBarChatButton from "./SideBarChatButton";

const SideBar = () => {
  const { sideBarVisible } = useToggle();
  const { chats } = useChats();

  return (
    <Box
      bg="bg.subtle"
      w={!sideBarVisible ? "0" : "260px"}
      overflow="hidden"
      transition="width 0.3s"
      h={"full"}
    >
      <Stack h="full" px="3" py="2">
        <SideBarControls />

        <Stack px="2" gap="0">
          <ChatGptButton />
          <ExploreGptButton />
        </Stack>

        <Stack px="2" my={3} flex={1} overflow={'scroll'} scrollbarWidth={'none'}>
          {chats.map((chat, index) => (
            <SideBarChatButton key={index} iD={index} title={chat[0]} />
          ))}
        </Stack>

        <UpgradePlanButton />
      </Stack>
    </Box>
  );
};

export default SideBar;
