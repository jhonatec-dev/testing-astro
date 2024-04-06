// "use client";
import { ExpandLess, MoneyOff } from "@mui/icons-material";
import { useState } from "react";
import Swal from "sweetalert2";

export function TestComp() {
  const [counter, setCounter] = useState(0);

  const showAlert = () => {
    Swal.fire({
      title: "Alerta",
      text: "Isso é um alerta",
      icon: "warning",
      confirmButtonText: "Ok",
      backdrop: true,
      customClass: "swal2-popup",
      iconColor: "#fff",
      confirmButtonColor: "rgb(var(--accent-light))",
      color: "rgb(var(--accent-light))",
      timer: 5000,
      timerProgressBar: true,
      showCloseButton: true,
    });
  };

  return (
    <>
      <h1>Algo {counter}</h1>
      {/* <ToggleButton value='teste' /> */}
      {/* <Button>Algo aqui</Button> */}
      {/* <Button>Algo</Button> */}
      {/* <ButtonBase>Algo</ButtonBase> */}
      <ExpandLess />
      <MoneyOff />
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Inc Counter
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={showAlert}>Alerta</button>
      <button
        className={`
  bg-blue-500
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded
  shadow
  transition
  duration-300
  ease-in-out
`}
      >
        Clique aqui
      </button>
    </>
  );
}
