import useIntParams from "@/hooks/useIntParams";
import { Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  iD?: number;
  title?: string;
}

const SideBarChatButton = ({ iD, title }: Props) => {
  const id = useIntParams();

  return (
    <Link to={`/chat/${iD}`}>
      <Button
        w={"full"}
        borderRadius="lg"
        justifyContent={"flex-start"}
        variant={iD === id ? "subtle" : "ghost"}
      >
        <Text
          fontSize="sm"
          fontWeight="md"
          overflowX={"scroll"}
          scrollbarWidth={"none"}
        >
          {title}
        </Text>
      </Button>
    </Link>
  );
};

export default SideBarChatButton;
