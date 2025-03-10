import { Content } from "@google/generative-ai";

const normalisePrompt = (prompt: string): Content => {
  return {
    role: "user",
    parts: [{ text: prompt }],
  };
};

export default normalisePrompt