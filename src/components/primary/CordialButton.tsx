import { Circle, HStack, Icon, Text } from "@chakra-ui/react";
import { FaInfinity } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CordialButton = () => {
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
          <Icon fontSize={"md"}>
            <FaInfinity />
          </Icon>
        </Circle>
        <Text fontSize="sm" fontWeight="md">
          Cordial Chat
        </Text>
      </HStack>
    </Link>
  );
};

export default CordialButton;
