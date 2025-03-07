const createChats = () => {
  const chats = [] as string[];
  sessionStorage.setItem("chats", JSON.stringify(chats));
};

const fetchChatResponse = async (prompt: string, responseText: string) => {
  const response = await new Promise<string[]>((resolve) => {
    //fake response
    setTimeout(() => {
      const storedChats: string[] = JSON.parse(
        sessionStorage.getItem("chats") || "[]"
      );
      storedChats.push(prompt);
      storedChats.push(responseText);
      sessionStorage.setItem("chats", JSON.stringify(storedChats));
      resolve(storedChats);
    }, 3000);
  });

  return response;
};

async function chatGPTService(prompt: string): Promise<string[]> {
  const responseText =
    "Thank you for your request! Our AI is processing your query and will provide a detailed response shortly. Please hold on for a moment as we generate the best possible answer for you. Your patience is greatly appreciated!";

  if (!sessionStorage.getItem("chats")) {
    createChats();
    const response = fetchChatResponse(prompt, responseText);
    return response;
  } else {
    const response = fetchChatResponse(prompt, responseText);
    return response;
  }
}

export default chatGPTService;
