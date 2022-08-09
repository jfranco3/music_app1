import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardSlider1 from "./VolumeSlider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        VOLUME
      </Typography>
    </CardContent>
    <CardActions>
      <CardSlider1 />
    </CardActions>
  </React.Fragment>
);

export default function CardSlider() {
  return (
    <div>
      <Box
        id="all-cards-child"
        sx={{
          maxWidth: 300,
          padding: 1,
          margin: "auto",
        }}
      >
        <Card variant="Outlined">{card}</Card>
      </Box>
    </div>
  );
}
