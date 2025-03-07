import { useContext } from "react";
import ToggleContext from "./ToggleContext";

export default function useToggle() {
  return useContext(ToggleContext);
}
