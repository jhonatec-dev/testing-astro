// "use client";
// import { Button, ToggleButton } from "@mui/material";
import { useState } from "react";

export function TestComp() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Algo {counter}</h1>
      {/* <ToggleButton value='teste' /> */}
      {/* <Button>Algo aqui</Button> */}
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Inc Counter
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
}
