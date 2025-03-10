import { UpgradeIcon } from "@/icons/sidebar-icons";
import { Button, Circle, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UpgradePlanButton = () => {
  return (
    <Link to={"#"}>
      <Button
        variant={"subtle"}
        px="2"
        py={"3.5"}
        h="10"
        borderRadius="lg"
        w="100%"
        whiteSpace="nowrap"
        justifyContent={"flex-start"}
      >
        <Circle size="8" fontSize="lg" borderWidth="1px">
          <UpgradeIcon />
        </Circle>
        <Stack gap="0" fontWeight="medium">
          <Text fontSize="sm" textAlign={"left"}>
            Upgrade plan
          </Text>
          <Text fontSize="xs" color="fg.subtle">
            More access to the best models
          </Text>
        </Stack>
      </Button>
    </Link>
  );
};

export default UpgradePlanButton;
