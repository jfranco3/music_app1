import React from "react";
import "./Dashboard.css";
import CardSwitch from "./Cards/CardSwitch";
import CardSlider from "./Cards/CardSlider";
import CardSelector from "./Cards/CardSelector";

export default function Dashboard() {
  return (
    <div className="all-cards">
      <CardSwitch />
      <CardSlider />
      <CardSelector />
    </div>
  );
}
