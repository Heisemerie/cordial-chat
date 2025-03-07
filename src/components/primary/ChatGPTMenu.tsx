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
  MenuSeparator,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  ChatGPTMenuIcon,
  ChatGPTPlusIcon,
  CheckIcon,
  MenuIcon,
  TemporaryChatIcon,
} from "../../icons/other-icons";
import { Fragment } from "react/jsx-runtime";
import { ReactNode } from "react";

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
      value: "chatgpt-plus",
      icon: <ChatGPTPlusIcon />,
      title: "ChatGPT Plus",
      description: "Our smartest model & more",
      element: (
        <Button variant="outline" size="xs" borderRadius="full">
          Upgrade
        </Button>
      ),
    },
    {
      value: "chatgpt",
      icon: <ChatGPTMenuIcon />,
      title: "ChatGPT",
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

const ChatGPTMenu = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant="ghost"
          fontSize="lg"
          fontWeight="bold"
          color="fg.muted"
        >
          ChatGPT <MenuIcon />
        </Button>
      </MenuTrigger>
      <MenuContent borderRadius="2xl" minW="320px">
        <MenuItemsList />
      </MenuContent>
    </MenuRoot>
  );
};

export default ChatGPTMenu;
