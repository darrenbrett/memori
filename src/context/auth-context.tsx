import React from "react";

type ContextProps = {
  authenticated: boolean;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

const AuthContextProvider = (props: any) => {
  return (
    <AuthContext.Provider
      value={{
        authenticated: true,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
