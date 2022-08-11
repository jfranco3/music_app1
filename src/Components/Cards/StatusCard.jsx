import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

export default function StatusCard(props) {
  const { status, setStatus, setNotification } = props;

  const handleStatus = (event) => {
    setStatus(event.target.checked);
    if (!status) {
      setNotification({
        onlineWarning:
          "Your application is offline. You won't be able to share or stream music to other devices.",
      });
    } else {
      setNotification({
        onlineWarning: "",
      });
    }
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          ONLINE STATUS
        </Typography>
        <Typography variant="body2"></Typography>
      </CardContent>
      <CardActions>
        <Switch onClick={handleStatus} checked={status} {...label} />
      </CardActions>
    </React.Fragment>
  );

  return (
    <div>
      <Box
        id="all-cards-child"
        sx={{
          minWidth: 200,
          padding: 1,
          margin: "auto",
        }}
      >
        <Card variant="Outlined">{card}</Card>
      </Box>
    </div>
  );
}
