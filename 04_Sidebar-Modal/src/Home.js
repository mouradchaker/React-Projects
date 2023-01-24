import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  const vl = useGlobalContext();
  // or const vl = useContext(AppContext);
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">show modal</button>
      {vl}
    </main>
  );
};

export default Home;
