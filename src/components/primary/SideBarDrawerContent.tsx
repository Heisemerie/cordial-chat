import useChats from "@/contexts/ChatsContext/useChats";
import { Stack } from "@chakra-ui/react";
import ChatButton from "./ChatButton";
import ExploreGptButton from "./ExploreModelsButton";
import GeminiButton from "./GeminiButton";
import SideBarControls from "./SideBarControls";
import UpgradePlanButton from "./UpgradePlanButton";

const SideBarDrawerContent = () => {
  const { chats } = useChats();
  return (
    <Stack flex={1} px="3" py="2" my={3}>
      <SideBarControls />

      <Stack px="2">
        <GeminiButton />
        <ExploreGptButton />
      </Stack>

      <Stack px="2" my={3} flex={1} overflow={"scroll"} scrollbarWidth={"none"}>
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
  );
};

export default SideBarDrawerContent;
