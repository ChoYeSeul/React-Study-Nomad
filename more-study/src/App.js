import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function Hello() {
  const effectFn = () => {};
  useEffect(() => {
    console.log("Im here");
  }, []);
  return <h1> Hello </h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  // useEffect는 화면이 다 그려지고 나서 그 이후 실행된다.
  const onClick = () => {
    setShowing(!showing);
  };

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> {showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
