import React from "react";
import TextField from "@mui/material/TextField";

export default function InputSave() {
  return (
    <TextField
      error
      id="outlined"
      label="Error"
      defaultValue="Enter Save Name"
    />
  );
}
