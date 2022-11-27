import React, { useState } from "react";
import { Data } from "./Data";
import "./App.css";
import { Button, Image } from "antd";
export default function App() {
  const [count, setCount] = useState(0);
  let x = Data[count];
  const Increment = function () {
    count > 0 ? setCount(count - 1) : setCount((count = 1));
  };
  const Decrement = function () {
    count >= Data.length - 1
      ? setCount(count - Data.length + 1)
      : setCount(count + 1);
  };
  return (
    <div className="main">
      <h1>Bizdagi jami rasmlar soni {Data.length}</h1>
      <div className="card" style={{ display: "flex" }}>
        <Button onClick={Increment} size="large">❮orqaga</Button>
        <Image className="fade" width={800} height={500} src={x.url} />
        <Button onClick={Decrement} type="primary" size="large">
          Keyingi❯
        </Button>
      </div>
    </div>
  );
}
