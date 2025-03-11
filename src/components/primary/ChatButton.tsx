import useIntParams from "@/hooks/useIntParams";
import { Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ChatDeleteButton from "./ChatDeleteButton";

interface Props {
  chatIndex?: number;
  title?: string;
}

const ChatButton = ({ chatIndex, title }: Props) => {
  const id = useIntParams();

  return (
    <Link to={`/chat/${chatIndex}`}>
      <Button
        w={"full"}
        borderRadius="lg"
        justifyContent={"space-between"}
        variant={chatIndex === id ? "subtle" : "ghost"}
        className="group"
      >
        <Text
          fontSize="sm"
          fontWeight="md"
          overflowX={"scroll"}
          scrollbarWidth={"none"}
        >
          {title}
        </Text>
        <ChatDeleteButton chatIndex={chatIndex} />
      </Button>
    </Link>
  );
};

export default ChatButton;
