import React from "react";

export default function RefHook() {
  const text = React.useRef();

  const onFocus = () => {
    text.current.style.background = "#ddf";
  };
  const onBlur = () => {
    text.current.style.background = "#fff";
  };
  React.useEffect(() => {
    const mytext = text.current;
    mytext.addEventListener("focus", onFocus);
    mytext.addEventListener("blur", onBlur);

    return () => {
      // cleanup actions
      mytext.addEventListener("focus", onFocus);
      mytext.addEventListener("blur", onBlur);
    };
  });

  return (
    <div>
      <h1>Ref Hook</h1>
      <input type="text" ref={text} />
    </div>
  );
}
