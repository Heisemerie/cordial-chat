import { Button, Circle, Icon, Text } from "@chakra-ui/react";
import { FaInfinity } from "react-icons/fa6";
import { SiGooglegemini } from "react-icons/si";
import { Link } from "react-router-dom";

const GeminiButton = () => {
  return (
    <Link to={"/"}>
      <Button
        variant={"subtle"}
        px="2"
        h="10"
        borderRadius="lg"
        w="100%"
        whiteSpace="nowrap"
        justifyContent={"flex-start"}
      >
        <Circle size="6" borderWidth="1px">
          <Icon fontSize={"md"}>
            <FaInfinity />
          </Icon>
        </Circle>
        <Text fontSize="sm" fontWeight="md">
          Gemini 1.5 Flash
        </Text>
        <SiGooglegemini />
      </Button>
    </Link>
  );
};

export default GeminiButton;
