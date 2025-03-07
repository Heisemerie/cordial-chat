import { createBrowserRouter } from "react-router-dom";
import ChatPanel from "./components/primary/ChatPanel";
import TextInputPanel from "./components/primary/TextInputPanel";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <TextInputPanel /> },
      { path: "chat", element: <ChatPanel /> },
    ],
  },
]);

export default router;
