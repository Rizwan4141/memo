import React, { useRef } from "react";

const Ref = () => {
  let inputRef = useRef(null);
  function handleInput() {
    console.warn("function call");
    // inputRef.current.value="100"
    inputRef.current.focus();
    // inputRef.current.style.color="red"/
    // inputRef.current.style.display="none"
  }
  return (
    <div>
      <h1>UseRef in React</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>handle Input</button>
    </div>
  );
};

export default Ref;
