import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducers";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const istate = null;
  const [state, dispatch] = useReducer(AlertReducer, istate);

  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });
    setTimeout(() => {
      dispatch({
        type: "REMOVE",
      });
    }, 1000);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
export default AlertContext;
