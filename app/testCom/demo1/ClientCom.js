"use client";
import { useState, useEffect } from "react";

export default function ClientCom() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ClientCom");
  }, []);

  return (
    <div>
      ClientCom count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
