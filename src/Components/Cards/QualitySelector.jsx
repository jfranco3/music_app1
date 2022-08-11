import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function QualitySelector(props) {
  const { quality, setQuality, setNotification, notification } = props;

  const handleChange = (event) => {
    setQuality(event.target.value);
    console.log("QUALITY", quality);
    if (event.target.value === "Low") {
      setNotification({
        ...notification,
        qualityWarning:
          "Music quality is degraded. Increase quality if your connection allows it.",
      });
    } else {
      setNotification({
        ...notification,
        qualityWarning: "",
      });
    }
  };

  return (
    <Box sx={{ m: 0.2, minWidth: 120 }} size="small">
      <FormControl fullWidth>
        <InputLabel id="demo-select-small">Quality</InputLabel>
        <Select
          labelId="demo-select-small"
          label="quality"
          value={quality}
          onChange={handleChange}
        >
          <MenuItem value={"Low"}>Low</MenuItem>
          <MenuItem value={"Normal"}>Normal</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
