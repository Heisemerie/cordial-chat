import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyBDXcaf8NZT2u3Qj4MY-pz2uh4QOIAy6vk";
const genAI = new GoogleGenerativeAI(API_KEY);
const geminiFlash = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default geminiFlash;
