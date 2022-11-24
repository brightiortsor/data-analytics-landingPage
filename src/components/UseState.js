import React from "react";
import { useState } from "react";
const UseState = () => {
  const [list, setList] = useState(["Dave", "Martha", "Jack"]);
  const [name, setName] = useState("");

  function addName() {
    setList([...list, name]);
    setName("");
  }
  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addName}>Add</button>
    </div>
  );
};

export default UseState;
