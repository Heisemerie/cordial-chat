import MainPanel from "@/components/primary/MainPanel";
import SideBar from "@/components/primary/SideBar";
import { HStack } from "@chakra-ui/react";

const Layout = () => {
  return (
    <HStack h={'100vh'} w={'100vw'} gap={0}>
      <SideBar />
      <MainPanel />
    </HStack>
  );
};

export default Layout;
