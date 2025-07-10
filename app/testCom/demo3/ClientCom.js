"use client";
import { useState, useEffect } from "react";

export default function ClientCom({ children }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ClientCom");
  }, []);

  return (
    <div>
      ClientCom count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      {count > 0 && children}
    </div>
  );
}
