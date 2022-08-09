import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [quality, setQuality] = React.useState("");

  const handleChange = (event) => {
    setQuality(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quality}
          label="quality"
          onChange={handleChange}
        >
          <MenuItem value={10}>Low</MenuItem>
          <MenuItem value={20}>Normal</MenuItem>
          <MenuItem value={30}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
