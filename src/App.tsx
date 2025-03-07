import { Flex } from "@chakra-ui/react";
import MainPanel from "./components/primary/MainPanel";
import SideBar from "./components/primary/SideBar";
import ToggleProvider from "./contexts/ToggleProvider";

function App() {
  return (
    <ToggleProvider>
      <Flex minH="100dvh">
        <SideBar />
        <MainPanel />
      </Flex>
    </ToggleProvider>
  );
}

export default App;
