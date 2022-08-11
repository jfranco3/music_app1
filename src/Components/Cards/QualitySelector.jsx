import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function QualitySelector(props) {
  const { quality, setQuality, setNotficiation } = props;

  const handleChange = (event) => {
    setQuality(event.target.value);
    if (quality === "Low") {
      setNotficiation({
        qualityWarning:
          "Music quality is degraded. Increase quality if your connection allows it.",
      });
    } else {
      setNotficiation({
        qualityWarning: "",
      });
    }
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
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
