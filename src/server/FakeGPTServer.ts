const createChats = () => {
  const chats = [] as string[][];
  sessionStorage.setItem("chats", JSON.stringify(chats));
};

const fetchChats = () => {
  const storedChats: string[][] = JSON.parse(
    sessionStorage.getItem("chats") || "[]"
  );
  return storedChats;
};

const fetchOrCreateNewChat = (id?: number) => {
  const storedChats = fetchChats();
  if (id === undefined) storedChats.push([]); // Create a new chat if the index is undefined
  const newOrRequestedChatId = id === undefined ? storedChats.length - 1 : id; //return new id for the new chat or id of requested chat
  return { storedChats, newOrRequestedChatId };
};

const fetchChatResponse = async (prompt: string, id?: number) => {
  const responseText =
    "Thank you for your request! Our AI is processing your query and will provide a detailed response shortly. Please hold on for a moment as we generate the best possible answer for you. Your patience is greatly appreciated!";

  const { storedChats, newOrRequestedChatId } = fetchOrCreateNewChat(id);

  const response = await new Promise<{
    storedChats: string[][];
    newOrRequestedChatId: number;
  }>((resolve) => {
    //simulate fake response
    setTimeout(() => {
      storedChats[newOrRequestedChatId].push(prompt); //append prompt
      storedChats[newOrRequestedChatId].push(responseText); //append responseText
      sessionStorage.setItem("chats", JSON.stringify(storedChats)); //store new chat
      const chatData = { storedChats, newOrRequestedChatId }; //return new chat and new chatId
      resolve(chatData);
    }, 3000);
  });
  return response;
};

export { createChats, fetchChatResponse };
