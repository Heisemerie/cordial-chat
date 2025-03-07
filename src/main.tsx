import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import ChatsProvider from "./contexts/ChatsContext/ChatsProvider.tsx";
import ToggleProvider from "./contexts/ToggleContext/ToggleProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ToggleProvider>
        <ChatsProvider>
          <RouterProvider router={router} />
        </ChatsProvider>
      </ToggleProvider>
    </Provider>
  </StrictMode>
);
