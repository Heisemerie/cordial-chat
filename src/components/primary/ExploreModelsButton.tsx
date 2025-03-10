import { ExploreModelsIcon } from "@/icons/sidebar-icons";
import { Button, Circle, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ExploreGptButton = () => {
  return (
    <Link to={"#"}>
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
          <ExploreModelsIcon fontSize="md" />
        </Circle>
        <Text fontSize="sm" fontWeight="md">
          Explore Models
        </Text>
      </Button>
    </Link>
  );
};

export default ExploreGptButton;
