import { useContext } from "react";
import { AppContext } from "~/src/components/shared/AppWrapper";

export const useAppContext = () => useContext(AppContext);

export default useAppContext;
