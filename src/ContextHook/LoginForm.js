import React from "react";
import { UserContext } from "./ContextHook";

export default function LoginForm() {
  const username = React.useRef();
  const currentUser = React.useContext(UserContext);

  const onSubmit = (ev) => {
    ev.preventDefault();
    currentUser.username === null
      ? currentUser.loginUser(username.current.value)
      : currentUser.logout();
  };

  return (
    <div>
      {currentUser.username === null ? (
        <form onSubmit={onSubmit}>
          <input type="text" ref={username} />
          <input type="submit" value="Login" />
        </form>
      ) : (
        <button onClick={onSubmit}>Logout</button>
      )}
    </div>
  );
}
