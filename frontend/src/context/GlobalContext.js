import { createContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
