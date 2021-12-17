import React from "react";
import { UserContext } from "./ContextHook";

export default function Header() {
  const currentUser = React.useContext(UserContext);
  return (
    <div>
      {currentUser.username ? (
        <p> Welcome {currentUser.username}</p>
      ) : (
        <p>Enter you nikname</p>
      )}
    </div>
  );
}
