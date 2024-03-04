import { useContext } from "react";
import { GlobalProviderContext } from "../context/GlobalProvider";

export const useGlobalContext = () => useContext(GlobalProviderContext);
