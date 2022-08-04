import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function AppLogin() {
  return (
    <div>
      <Stack spacing={2}>
        <TextField
          id="demo-helper-text-misaligned"
          label="Required"
          defaultValue="Username"
          sx={{ width: "30%" }}
          required="true"
        />
        <TextField
          id="filled-required"
          label="Required"
          defaultValue="Password"
          sx={{ width: "30%" }}
          required="true"
        />
      </Stack>

      <Button id="login-button" variant="contained" color="success">
        LOGIN
      </Button>
    </div>
  );
}
