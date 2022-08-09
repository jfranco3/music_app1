import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Selector from "./Selector";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        SELECTOR
      </Typography>
      <Typography sx={{ mb: 0.5 }} color="text.secondary"></Typography>
    </CardContent>
    <CardActions>
      <Selector />
    </CardActions>
  </React.Fragment>
);

export default function CardSelector() {
  return (
    <div>
      <Box
        id="all-cards-child"
        sx={{
          maxWidth: 200,
          padding: 1,
          margin: "auto",
        }}
      >
        <Card variant="Outlined">{card}</Card>
      </Box>
    </div>
  );
}
