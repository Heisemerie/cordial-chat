import { ReactNode, useState } from "react";
import ChatsContext from "./ChatsContext";

interface Props {
  children: ReactNode;
}

const ChatsProvider = ({ children }: Props) => {
  const [chats, setChats] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <ChatsContext.Provider value={{ chats, setChats, loading, setLoading }}>
      {children}
    </ChatsContext.Provider>
  );
};

export default ChatsProvider;
