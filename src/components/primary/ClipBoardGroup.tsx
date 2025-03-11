import { HStack } from "@chakra-ui/react/stack";
import { Text } from "@chakra-ui/react";
import { ClipboardIconButton, ClipboardRoot } from "../ui/clipboard";
import { SiGooglegemini } from "react-icons/si";

interface Props {
  value?: string;
}

const ClipBoard = ({ value }: Props) => {
  return (
    <ClipboardRoot value={value}>
      <ClipboardIconButton variant={"ghost"} color={"fg.subtle"} />
    </ClipboardRoot>
  );
};

const ClipBoardGroup = ({ value }: Props) => {
  return (
    <HStack gap={1}>
      <ClipBoard value={value} />
      <HStack>
        <SiGooglegemini color={"gray"} />
        <Text
          fontSize={"xs"}
          color={"fg.subtle"}
          opacity={0}
          transition="opacity 0.2s"
          _groupHover={{ opacity: 1 }}
        >
          Gemini
        </Text>
      </HStack>
    </HStack>
  );
};

export default ClipBoardGroup;
