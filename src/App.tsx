import { Flex } from "@chakra-ui/react";
import MainPanel from "./components/primary/MainPanel";
import SideBar from "./components/primary/SideBar";
import ToggleProvider from "./contexts/ToggleProvider";

function App() {
  return (
    <ToggleProvider>
      <Flex h="100vh">
        <SideBar />
        <MainPanel />
      </Flex>
    </ToggleProvider>
  );
}

export default App;
