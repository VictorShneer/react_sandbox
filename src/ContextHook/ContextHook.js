import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";

export const UserContext = React.createContext();

export default function ReactHook() {
  const [username, setUsername] = React.useState(null);
  const currentUser = {
    username: username,
    loginUser: (_username) => {
      setUsername(_username);
    },
    logout: () => {
      setUsername(null);
    }
  };
  return (
    <div>
      <h1>Context Hook</h1>
      <UserContext.Provider value={currentUser}>
        <Navigation />
        <Header />
      </UserContext.Provider>
    </div>
  );
}
