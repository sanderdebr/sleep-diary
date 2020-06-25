import { useContext } from "react";
import { AppContext } from "~/src/components/AppWrapper";

export const useAppContext = () => useContext(AppContext);

export default useAppContext;
