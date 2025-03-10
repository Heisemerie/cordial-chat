import useChats from "@/contexts/ChatsContext/useChats";
import useIntParams from "@/hooks/useIntParams";
import chatGPTService from "@/services/chatGPTService";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup } from "../ui/input-group";
import FileUploadButton from "./FileUploadButton";
import SendPromptButton from "./SendPromptButton";

const TextInput = () => {
  const navigate = useNavigate();
  const id = useIntParams();

  const { setChats, setThinking, setChatId } = useChats();
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (prompt !== "") {
      setPrompt("");

      setThinking(true);

      //send prompt to server
      chatGPTService(prompt, id).then(
        ({ storedChats, newOrRequestedChatId }) => {
          navigate(`/chat/${newOrRequestedChatId}`);
          setChats(storedChats);
          setChatId(newOrRequestedChatId);
          setThinking(false)
        }
      );
    }
  };

  return (
    <form id="TextInput">
      <InputGroup
        minW="768px"
        startElement={<FileUploadButton />}
        endElement={
          <SendPromptButton prompt={prompt} handleSubmit={handleSubmit} />
        }
      >
        <Input
          as={"input"}
          placeholder="Message Gemini 1.5"
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
