import Child from "./components/Child";
import { useState } from "react";

import "./styles.css";

export default function App() {
  const [data, setData] = useState("");

  const childtoParaent = (childdata) => {
    setData(childdata);
  };

  return (
    <div className="App">
      {data}
      <Child childtoParaent={childtoParaent} />
    </div>
  );
}
