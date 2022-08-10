import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import CardSwitch from "./Cards/CardSwitch";
import CardSlider from "./Cards/CardSlider";
import CardSelector from "./Cards/CardSelector";

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

  useEffect(() => {
    if (!online) {
      setNotifications([
        ...notifications,
        "Your application is offline. You will not be able to share or stream music to other devices.",
      ]);
    }
    if (value >= 80) {
      setNotifications([
        ...notifications,
        "Listening to music at a high volume could cause long-term hearing loss.",
      ]);
    }
    if (quality === "low") {
      setNotifications([
        ...notifications,
        "Music quality is degraded. Increase quality if your connection allows it.",
      ]);
    }
  }, [online, value, quality]);

  console.log("NOTIFICATIONS", notifications);

  return (
    <div className="all-cards">
      <CardSwitch setOnline={setOnline} online={online} />
      <CardSlider setValue={setValue} value={value} />
      <CardSelector setQuality={setQuality} quality={quality} />
    </div>
  );
}
