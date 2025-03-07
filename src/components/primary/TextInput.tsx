import { EnterIcon, UploadIcon } from "@/icons/other-icons";
import {
  FileUploadRoot,
  FileUploadTrigger,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { FileUploadList } from "../ui/file-upload";
import { InputGroup } from "../ui/input-group";
import { useState } from "react";

const TextInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    //send prompt to server
    setInputValue("");
  };

  return (
    <InputGroup
      minW="768px"
      startElement={
        <FileUploadRoot>
          <FileUploadTrigger asChild>
            <UploadIcon fontSize="2xl" color="fg" />
          </FileUploadTrigger>
          <FileUploadList />
        </FileUploadRoot>
      }
      endElement={
        <IconButton
          fontSize="2xl"
          size="sm"
          borderRadius="full"
          disabled={inputValue.trim() === ""}
          onClick={handleClick}
        >
          <EnterIcon fontSize="2xl" />
        </IconButton>
      }
    >
      <Input
        placeholder="Message ChatGPT"
        variant="subtle"
        size="lg"
        borderRadius="3xl"
        outline={"none"}
        border={'none'}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </InputGroup>
  );
};

export default TextInput;
