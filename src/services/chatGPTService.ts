import { createChats, fetchChatResponse } from "@/server/FakeGPTServer";

const chatGPTService = (
  prompt: string,
  id?: number
): Promise<{
  storedChats: string[][];
  newOrRequestedChatId: number;
}> => {
  if (!sessionStorage.getItem("chats")) {
    createChats();
    const response = fetchChatResponse(prompt, id);
    return response;
  } else {
    const response = fetchChatResponse(prompt, id);
    return response;
  }
};

export default chatGPTService;
