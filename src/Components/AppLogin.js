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
          label="Username"
          sx={{ width: "30%" }}
        />
        <TextField
          id="demo-helper-text-misaligned"
          label="Password"
          sx={{ width: "30%" }}
        />
      </Stack>

      <Button variant="contained" color="success">
        LOGIN
      </Button>
    </div>
  );
}
