"use client";
import { useState, useEffect } from "react";
import ServerCom from "./ServerCom";

export default function ClientCom() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ClientCom");
  }, []);

  return (
    <div>
      ClientCom count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      {count > 0 && <ServerCom />}
    </div>
  );
}
