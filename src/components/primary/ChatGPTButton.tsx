import { SmallGPTIcon, NewChatIcon } from "@/icons/sidebar-icons";
import { HStack, Link, Circle, AbsoluteCenter, Text } from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";

const ChatGptButton = () => {
  return (
    <HStack
      _hover={{ layerStyle: "fill.muted", textDecoration: "none" }}
      px="1"
      h="10"
      borderRadius="lg"
      w="100%"
      whiteSpace="nowrap"
      position="relative"
      className="group"
    >
      <Link
        href="#"
        variant="plain"
        _hover={{ textDecoration: "none" }}
        w={"full"}
        outline={"none"}
      >
        <Circle size="6"  borderWidth="1px">
          <SmallGPTIcon fontSize="md" />
        </Circle>
        <Text fontSize="sm" fontWeight="md">
          ChatGPT
        </Text>
      </Link>
      <AbsoluteCenter
        axis="vertical"
        right="2"
        display="none"
        _groupHover={{ display: "initial" }}
      >
        <Tooltip content="New chat">
          <NewChatIcon
            fontSize="md"
            color="fg.subtle"
            _hover={{ color: "fg.muted" }}
          />
        </Tooltip>
      </AbsoluteCenter>
    </HStack>
  );
};

export default ChatGptButton;
