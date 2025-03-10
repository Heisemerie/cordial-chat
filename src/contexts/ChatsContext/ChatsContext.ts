import { Content } from "@google/generative-ai";
import React from "react";
import { Dispatch } from "react";

type history = Content[];

export interface chat {
  history: history;
}

//chat format:
// {
//   history: [
//     {
//       role: "user",
//       parts: [{ text: "Hello" }],
//     },
//     {
//       role: "model",
//       parts: [{ text: "Great to meet you. What would you like to know?" }],
//     },
//   ],
// }

interface ChatsContextType {
  chats: chat[];
  setChats: Dispatch<React.SetStateAction<chat[]>>;
  thinking: boolean;
  setThinking: Dispatch<React.SetStateAction<boolean>>;
}

const ToggleContext = React.createContext<ChatsContextType>(
  {} as ChatsContextType
);

export default ToggleContext;
