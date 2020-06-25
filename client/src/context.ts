import { createContext } from "react";

export default createContext<{
  originalURL: string;
  customURL: string;
  setOriginalURL: React.Dispatch<React.SetStateAction<string>> | null;
  setCustomURL: React.Dispatch<React.SetStateAction<string>> | null;
}>({
  customURL: "",
  originalURL: "",
  setCustomURL: null,
  setOriginalURL: null,
});
