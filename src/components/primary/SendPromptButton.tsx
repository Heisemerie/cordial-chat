import { EnterIcon } from "@/icons/other-icons";
import { IconButton } from "@chakra-ui/react";

const SendPromptButton = ({
  prompt,
  handleSubmit,
}: {
  prompt: string;
  handleSubmit: () => void;
}) => {
  return (
    <IconButton
      type={"submit"}
      form={"TextInput"}
      fontSize={"2xl"}
      size={"sm"}
      borderRadius={"full"}
      disabled={prompt.trim() === ""}
      onClick={handleSubmit}
    >
      <EnterIcon fontSize={"2xl"} />
    </IconButton>
  );
};

export default SendPromptButton;
