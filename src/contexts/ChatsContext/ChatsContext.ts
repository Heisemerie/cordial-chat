import React from "react";
import { Dispatch } from "react";

interface ChatsContextType {
  chats: string[][];
  setChats: Dispatch<React.SetStateAction<string[][]>>;
  chatId: number;
  setChatId: Dispatch<React.SetStateAction<number>>;
  thinking: boolean;
  setThinking: Dispatch<React.SetStateAction<boolean>>;
}

const ToggleContext = React.createContext<ChatsContextType>(
  {} as ChatsContextType
);

export default ToggleContext;
