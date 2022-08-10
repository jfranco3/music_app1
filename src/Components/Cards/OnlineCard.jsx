import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

export default function CardSwitch(props) {
  const handleOnline = () => {
    props.setOnline(!props.online);
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          ONLINE MODE
        </Typography>
        <Typography variant="body2"></Typography>
      </CardContent>
      <CardActions>
        <Switch onClick={handleOnline} {...label} />
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
