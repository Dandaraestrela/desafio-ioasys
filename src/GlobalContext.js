import { createContext, useEffect, useState } from "react";

const initialState = {
  id: sessionStorage.getItem("currentUserId"),
  name: sessionStorage.getItem("currentUserName"),
  authorization: sessionStorage.getItem("currentUserAuthorization"),
};

export const Context = createContext();

export const GlobalContext = ({ children }) => {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    sessionStorage.setItem("currentUserId", user.id);
    sessionStorage.setItem("currentUserName", user.name);
    sessionStorage.setItem("currentUserAuthorization", user.authorization);
  }, [user]);

  return (
    <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
  );
};
