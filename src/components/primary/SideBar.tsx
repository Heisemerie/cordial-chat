import { Box, Stack } from "@chakra-ui/react";
import GeminiButton from "./GeminiButton";
import ExploreGptButton from "./ExploreModelsButton";
import UpgradePlanButton from "./UpgradePlanButton";
import SideBarControls from "./SideBarControls";
import useToggle from "@/contexts/ToggleContext/useToggle";
import useChats from "@/contexts/ChatsContext/useChats";
import ChatButton from "./ChatButton";

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

        <Stack px="2">
          <GeminiButton />
          <ExploreGptButton />
        </Stack>

        <Stack
          px="2"
          my={3}
          flex={1}
          overflow={"scroll"}
          scrollbarWidth={"none"}
        >
          {chats.map((chat, index) => (
            <ChatButton
              key={index}
              chatIndex={index}
              title={chat.history[0].parts[0].text}
            />
          ))}
        </Stack>

        <UpgradePlanButton />
      </Stack>
    </Box>
  );
};

export default SideBar;
