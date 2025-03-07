import React from "react";
import { Dispatch } from "react";

interface ToggleContextType {
  sideBarVisible: boolean;
  setSidebarVisible: Dispatch<React.SetStateAction<boolean>>;
}

const ToggleContext = React.createContext<ToggleContextType>(
  {} as ToggleContextType
);

export default ToggleContext;
