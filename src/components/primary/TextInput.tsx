import { EnterIcon, UploadIcon } from "@/icons/other-icons";
import {
  FileUploadRoot,
  FileUploadTrigger,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { FileUploadList } from "../ui/file-upload";
import { InputGroup } from "../ui/input-group";
import chatGPTService from "@/services/chatGPTService";

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
  inputValue,
  handleClick,
}: {
  inputValue: string;
  handleClick: () => void;
}) => {
  return (
    <IconButton
      fontSize="2xl"
      size="sm"
      borderRadius="full"
      disabled={inputValue.trim() === ""}
      onClick={handleClick}
    >
      <EnterIcon fontSize="2xl" />
    </IconButton>
  );
};

const TextInput = ({ setChats }: { setChats: (chats: string[]) => void }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue !== "") {
      //send prompt to server
      chatGPTService(inputValue).then((res) => setChats(res));
      setInputValue("");
    }
  };

  return (
    <InputGroup
      minW="768px"
      startElement={<FileUploadButton />}
      endElement={
        <SendPromptButton inputValue={inputValue} handleClick={handleClick} />
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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </InputGroup>
  );
};

export default TextInput;
