import { ReactNode, useState } from "react";
import ChatsContext from "./ChatsContext";

interface Props {
  children: ReactNode;
}

const ChatsProvider = ({ children }: Props) => {
    const [chats, setChats] = useState<string[]>([]);

  return (
    <ChatsContext.Provider value={{ chats, setChats }}>
      {children}
    </ChatsContext.Provider>
  );
};

export default ChatsProvider;
