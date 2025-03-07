import { useContext } from "react";
import ChatsContext from "./ChatsContext";

export default function useChats() {
  return useContext(ChatsContext);
}
