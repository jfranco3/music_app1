import React from "react";
import ProminentAppBar from "./Components/ProminentAppBar";
import AppLogin from "./Components/AppLogin";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div>
      <ProminentAppBar />
      <AppLogin />
      <Dashboard/>
    </div>
  );
}

export default App;
