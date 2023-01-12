import { createContext, useState } from "react";
import Client from "webauthn/client";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const client = new Client({
    pathPrefix: "https://bewildered-pig-ring.cyclic.app/webauthn",
  });

  const register = async (username) => {
    const res = await client.register({
      username,
      name: username,
    });
    console.log(res);
  };

  const login = () => {};

  return (
    <UserContext.Provider
      value={{
        user,
        register,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
