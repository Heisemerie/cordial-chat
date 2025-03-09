import useChats from "@/contexts/ChatsContext/useChats";
import { EnterIcon, UploadIcon } from "@/icons/other-icons";
import chatGPTService from "@/services/chatGPTService";
import {
  FileUploadRoot,
  FileUploadTrigger,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FileUploadList } from "../ui/file-upload";
import { InputGroup } from "../ui/input-group";

const FileUploadButton = () => {
  return (
    <FileUploadRoot>
      <FileUploadTrigger asChild>
        <UploadIcon fontSize="2xl" color="fg" />
      </FileUploadTrigger>
      <FileUploadList />
    </FileUploadRoot>
  );
};

const SendPromptButton = ({
  prompt,
  handleClick,
}: {
  prompt: string;
  handleClick: () => void;
}) => {
  return (
    <IconButton
      type="submit"
      form="TextInput"
      fontSize="2xl"
      size="sm"
      borderRadius="full"
      disabled={prompt.trim() === ""}
      onClick={handleClick}
    >
      <EnterIcon fontSize="2xl" />
    </IconButton>
  );
};

const TextInput = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { setChats, setThinking } = useChats();
  const [prompt, setPrompt] = useState("");

  const handleClick = () => {
    if (prompt !== "") {
      //navigate to HomePage from ChatPage and clear input field
      if (!pathname.includes("chat")) navigate("/chat");
      setPrompt("");

      //show thinking skeleton
      setThinking(true);

      //send prompt to server
      chatGPTService(prompt).then((res) => {
        setChats(res);
        setThinking(false);
      });
    }
  };

  return (
    <form id="TextInput">
      <InputGroup
        minW="768px"
        startElement={<FileUploadButton />}
        endElement={
          <SendPromptButton prompt={prompt} handleClick={handleClick} />
        }
      >
        <Input
          as={"input"}
          placeholder="Message ChatGPT"
          variant="subtle"
          size="lg"
          borderRadius="3xl"
          outline={"none"}
          border={"none"}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default TextInput;
