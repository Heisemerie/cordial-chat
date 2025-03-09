import { ReactNode, useState } from "react";
import ChatsContext from "./ChatsContext";

interface Props {
  children: ReactNode;
}

const ChatsProvider = ({ children }: Props) => {
  const [chats, setChats] = useState<string[][]>(
    (JSON.parse(sessionStorage.getItem("chats") || "[]") as string[][]) || []
  );
  const [thinking, setThinking] = useState(false);
  const [chatId, setChatId] = useState(0);

  return (
    <ChatsContext.Provider
      value={{ chats, setChats, chatId, setChatId, thinking, setThinking }}
    >
      {children}
    </ChatsContext.Provider>
  );
};

export default ChatsProvider;
