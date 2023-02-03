import React, { useState } from "react";

const Child = ({ childtoParaent }) => {
  const data = "update Parent Component";

  return (
    <div>
      <h1>Child Componenet </h1>
      <button onClick={() => childtoParaent(data)}>Child Button </button>
    </div>
  );
};

export default Child;
