import { useContext } from "react";
import { AppContext } from "~/src/components/shared/AppWrapper";

const useAppContext = () => useContext(AppContext);

export default useAppContext;
