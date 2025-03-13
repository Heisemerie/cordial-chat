import useChats from "@/contexts/ChatsContext/useChats";
import { IconButton } from "@chakra-ui/react/button";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface Props {
  chatIndex?: number;
}

const ChatDeleteButton = ({ chatIndex }: Props) => {
  const { chats, setChats } = useChats();
  const navigate = useNavigate();

  const deleteChat = (e: React.MouseEvent) => {
    e.preventDefault();
    const newChat = chats.filter((_, index) => index !== chatIndex);
    setChats(() => newChat);
    localStorage.setItem("chats", JSON.stringify(newChat));
    navigate("/");
  };

  return (
    <IconButton
      variant="ghost"
      size={"xs"}
      opacity={0}
      transition="opacity 0.2s"
      _groupHover={{ opacity: 1 }}
      onClick={(e) => deleteChat(e)}
    >
      <MdDelete fontSize="sm" />
    </IconButton>
  );
};

export default ChatDeleteButton;
