import { SmallGPTIcon } from "@/icons/sidebar-icons";
import { Circle, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ChatGptButton = () => {
  return (
    <Link to={"/"}>
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
        <Circle size="6" borderWidth="1px">
          <SmallGPTIcon fontSize="md" />
        </Circle>
        <Text fontSize="sm" fontWeight="md">
          ChatGPT
        </Text>
      </HStack>
    </Link>
  );
};

export default ChatGptButton;
