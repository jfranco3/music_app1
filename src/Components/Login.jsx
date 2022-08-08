import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";

//rendered by App.jsx
export default function Login(props) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      className="textfield"
    >
      <Stack spacing={2}>
        <TextField
          className="textfield-child"
          label="Required"
          defaultValue="Username"
          required
        />
        <TextField
          className="textfield-child"
          label="Required"
          defaultValue="Password"
          required
        />
        <Button
          onClick={() => props.setLoggedIn(true)}
          className="login-button"
          variant="contained"
          color="success"
        >
          LOG IN
        </Button>
      </Stack>
    </div>
  );
}
