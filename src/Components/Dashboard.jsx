import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import CardSwitch from "./Cards/CardSwitch";
import CardSlider from "./Cards/CardSlider";
import CardSelector from "./Cards/CardSelector";
import { Typography } from "@mui/material";

export default function Dashboard() {
  //system notifications
  const [notification, setNotification] = useState({
    onlineWarning: "",
    volumeWarning: "",
    qualityWarning: "",
  });

  const [online, setOnline] = useState(false);
  const [value, setValue] = useState(20);
  const [quality, setQuality] = useState("");

  console.log("NOTIFICATION", notification);

  return (
    <div>
      <div className="all-cards">
        <CardSwitch setOnline={setOnline} online={online} />
        <CardSlider
          setValue={setValue}
          value={value}
          setNotification={setNotification}
        />
        <CardSelector setQuality={setQuality} quality={quality} />
      </div>
      <div>
        <h1>NOTIFICATION: </h1>
        <Typography variant="h6">{notification.volumeWarning}</Typography>
        <Typography variant="h6">{notification.qualityWarning}</Typography>
        <Typography variant="h6">{notification.onlineWarning}</Typography>
      </div>
    </div>
  );
}
