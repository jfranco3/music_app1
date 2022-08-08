import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";

//rendered by App.jsx
export default function Login(props) {
  return (
    <>
    <div className="textfield">
      <Stack spacing={2}>
        <TextField className="textfield-child"
          id="demo-helper-text-misaligned"
          label="Required"
          defaultValue="Username"
          sx={{ width: "30%" }}
          required
        />
        <TextField className="textfield-child"
          id="filled-required"
          label="Required"
          defaultValue="Password"
          sx={{ width: "30%" }}
          required
        />
      </Stack>
      </div>

      <div>
      <Button
        onClick={() => props.setLoggedIn(true)}
        className="login-button"
        variant="contained"
        color="success"
      >
        LOGIN
      </Button>
    </div>
    </>
  );
}
