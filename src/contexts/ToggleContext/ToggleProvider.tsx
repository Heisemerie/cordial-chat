import { ReactNode, useState } from "react";
import ToggleContext from "./ToggleContext";

interface Props {
  children: ReactNode;
}

const ToggleProvider = ({ children }: Props) => {
  const [sideBarVisible, setSidebarVisible] = useState(true);

  return (
    <ToggleContext.Provider value={{ sideBarVisible, setSidebarVisible }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
