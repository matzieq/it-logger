import React, { useEffect } from "react";
import SearchBar from "components/layout/SearchBar";
import Logs from "components/logs/Logs";
import AddBtn from "components/layout/AddBtn";
import AddLogModal from "components/logs/AddLogModal";
import AddTechModal from "components/techs/AddTechModal";
import EditLogModal from "components/logs/EditLogModal";
import TechListModal from "components/techs/TechListModal";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <AddTechModal />
        <TechListModal />
        <EditLogModal />
        <Logs />
      </div>
    </>
  );
};

export default App;
