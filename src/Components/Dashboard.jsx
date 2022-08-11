import React, { useState } from "react";
import "./Dashboard.css";
import StatusCard from "./Cards/StatusCard";
import VolumeCard from "./Cards/VolumeCard";
import QualityCard from "./Cards/QualityCard";
import { Typography } from "@mui/material";

export default function Dashboard() {
  //system notifications
  const [notification, setNotification] = useState({
    onlineWarning: "",
    volumeWarning: "",
    qualityWarning: "",
  });

  const [status, setStatus] = useState(false);
  const [value, setValue] = useState(20);
  const [quality, setQuality] = useState("");

  console.log("NOTIFICATION", notification);

  return (
    <div>
      <div className="all-cards">
        <StatusCard
          status={status}
          setStatus={setStatus}
          setNotification={setNotification}
        />
        <VolumeCard
          value={value}
          setValue={setValue}
          setNotification={setNotification}
        />
        <QualityCard
          quality={quality}
          setQuality={setQuality}
          setNotification={setNotification}
        />
      </div>
      <div>
        <h1>NOTIFICATIONS: </h1>
        <Typography variant="h6">{notification.volumeWarning}</Typography>
        <Typography variant="h6">{notification.qualityWarning}</Typography>
        <Typography variant="h6">{notification.onlineWarning}</Typography>
      </div>
    </div>
  );
}
