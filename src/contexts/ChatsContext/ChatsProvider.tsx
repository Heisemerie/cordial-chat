import { ReactNode, useState } from "react";
import ChatsContext, { chat } from "./ChatsContext";

interface Props {
  children: ReactNode;
}

const ChatsProvider = ({ children }: Props) => {
  const [chats, setChats] = useState<chat[]>(
    JSON.parse(localStorage.getItem("chats") || "[]")
  );
  const [thinking, setThinking] = useState(false);

  return (
    <ChatsContext.Provider value={{ chats, setChats, thinking, setThinking }}>
      {children}
    </ChatsContext.Provider>
  );
};

export default ChatsProvider;
