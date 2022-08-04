import React from "react";
import ProminentAppBar from "./Components/ProminentAppBar";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div>
      <ProminentAppBar />
      {!loggedIn && <Login setLoggedIn={setLoggedIn} />}
      <Dashboard />
    </div>
  );
}
