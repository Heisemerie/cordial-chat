import { Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const MiddleSection = () => {
  return (
    <Center flex="1" overflow={"hidden"}>
      <Outlet />
    </Center>
  );
};

export default MiddleSection;
