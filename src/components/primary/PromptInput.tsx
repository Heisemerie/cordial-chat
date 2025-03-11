import { chat } from "@/contexts/ChatsContext/ChatsContext";
import useChats from "@/contexts/ChatsContext/useChats";
import useIntParams from "@/hooks/useIntParams";
import geminiFlash from "@/services/geminiFlash";
import normalisePrompt from "@/services/normalisePrompt";
import { Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup } from "../ui/input-group";
import SendPromptButton from "./SendPromptButton";

const PromptInput = () => {
  const navigate = useNavigate();
  const id = useIntParams();
  const isHomePage = id === undefined;

  const [prompt, setPrompt] = useState("");
  const { chats, setChats, setThinking } = useChats();
  const newChatID = chats.length;
  const currentChatHistory = chats?.[id!];

  const handleSubmit = () => {
    setPrompt("");

    setThinking(() => true);

    //send history & prompt to model
    geminiFlash
      .startChat(currentChatHistory)
      .sendMessage(prompt)
      .then((result) => {
        const normalisedResponse = result.response.candidates?.[0]?.content;
        const normalisedPrompt = normalisePrompt(prompt);

        // On homepage: add a new chat
        if (isHomePage) {
          setChats((prevChats) => [
            ...prevChats,
            { history: [normalisedPrompt, normalisedResponse] } as chat,
          ]);

          // Navigate to new chat
          navigate(`/chat/${newChatID}`);
        }

        setThinking(false);
      });
  };

  return (
    <form id="PromptInput">
      <InputGroup
        minW={"768px"}
        endElement={
          <SendPromptButton prompt={prompt} handleSubmit={handleSubmit} />
        }
      >
        <Textarea
          autoresize
          as={"textarea"}
          placeholder={"Message Gemini"}
          variant={"subtle"}
          size={"lg"}
          borderRadius={"3xl"}
          outline={"none"}
          border={"none"}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default PromptInput;
