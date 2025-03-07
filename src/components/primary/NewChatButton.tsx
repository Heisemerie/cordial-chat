import { NewChatIcon } from "@/icons/sidebar-icons";
import { IconButton } from "@chakra-ui/react";
import { Tooltip } from "../ui/tooltip";
import { Link } from "react-router-dom";

const NewChatButton = () => {
  return (
    <Link to={"/"}>
      <Tooltip content="New chat" showArrow>
        <IconButton variant="ghost">
          <NewChatIcon fontSize="2xl" color="fg.muted" />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default NewChatButton;
