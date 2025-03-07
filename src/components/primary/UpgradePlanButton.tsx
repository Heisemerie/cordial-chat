import { UpgradeIcon } from "@/icons/sidebar-icons";
import { Circle, HStack, Link, Stack, Text } from "@chakra-ui/react";

const UpgradePlanButton = () => {
  return (
    <Link
      href="#"
      _hover={{ layerStyle: "fill.muted", textDecoration: "none" }}
      py="2"
      px="1"
      h="10"
      borderRadius="lg"
      w="100%"
      outline={"none"}
    >
      <HStack whiteSpace="nowrap">
        <Circle size="8" fontSize="lg" borderWidth="1px">
          <UpgradeIcon />
        </Circle>
        <Stack gap="0" fontWeight="medium">
          <Text fontSize="sm">Upgrade plan</Text>
          <Text fontSize="xs" color="fg.subtle">
            More access to the best models
          </Text>
        </Stack>
      </HStack>
    </Link>
  );
};

export default UpgradePlanButton;
