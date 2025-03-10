import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import {
  Box,
  Circle,
  HStack,
  Icon,
  MenuSeparator,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  CordialMenuIcon,
  CordialPlusIcon,
  CheckIcon,
  MenuIcon,
  TemporaryChatIcon,
} from "../../icons/other-icons";
import { Fragment } from "react/jsx-runtime";
import { ReactNode } from "react";
import { FaInfinity } from "react-icons/fa6";

interface Props {
  icon: ReactNode;
  title: string;
  description?: string;
  element: ReactNode;
}

const MenuItemDetail = ({ icon, title, description, element }: Props) => {
  return (
    <HStack w="100%">
      <Circle size="8" backgroundColor="bg.muted">
        {icon}
      </Circle>
      <Stack gap="0" flex="1">
        <Text>{title}</Text>
        <Text fontSize="xs" color="fg.muted">
          {description}
        </Text>
      </Stack>
      <Box>{element}</Box>
    </HStack>
  );
};

const MenuItemsList = () => {
  const menuItems = [
    {
      value: "cordial-plus",
      icon: <CordialPlusIcon />,
      title: "Cordial Plus",
      description: "Our smartest model & more",
      element: (
        <Button variant="outline" size="xs" borderRadius="full">
          Upgrade
        </Button>
      ),
    },
    {
      value: "cordial",
      icon: <CordialMenuIcon />,
      title: "Cordial",
      description: "Great for everyday tasks",
      element: <CheckIcon fontSize="lg" />,
    },
    {
      value: "temporary-chat",
      icon: <TemporaryChatIcon />,
      title: "Temporary chat",
      description: undefined,
      element: <Switch fontSize="sm" colorPalette="teal" />,
    },
  ];

  return (
    <>
      {menuItems.map(({ value, icon, title, description, element }, index) => (
        <Fragment key={index}>
          {index === menuItems.length - 1 && <MenuSeparator />}
          <MenuItem value={value} py="2" borderRadius={10}>
            <MenuItemDetail
              title={title}
              icon={icon}
              description={description}
              element={element}
            />
          </MenuItem>
        </Fragment>
      ))}
    </>
  );
};

const CordialDropDownMenu = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant="ghost"
          fontSize="lg"
          fontWeight="bold"
          color="fg.muted"
        >
          Cordial {" "}
          <Circle size="6" borderWidth="1px">
            <Icon fontSize={"md"}>
              <FaInfinity />
            </Icon>
          </Circle>
          <MenuIcon />
        </Button>
      </MenuTrigger>
      <MenuContent borderRadius="2xl" minW="320px">
        <MenuItemsList />
      </MenuContent>
    </MenuRoot>
  );
};

export default CordialDropDownMenu;
