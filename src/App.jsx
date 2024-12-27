import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddRoom from "./components/room/AddRoom";
import ExistingRooms from "./components/room/ExistingRooms";

function App() {
  return (
    <>
      <AddRoom />
      <ExistingRooms />
    </>
  );
}

export default App;
