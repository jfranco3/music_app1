import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import VolumeSlider from "./VolumeSlider";

export default function VolumeCard(props) {
  const { value, setValue, setNotification, notification } = props;
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          VOLUME
        </Typography>
      </CardContent>
      <CardActions>
        <VolumeSlider
          value={value}
          setValue={setValue}
          setNotification={setNotification}
          notification={notification}
        />
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
