import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Puzzle002() {
  const [formIsValid,setFormIsValid] = useState(false);

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 2, width: "25ch" },
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
      >
        <TextField
          // error
          helperText="Enter the correct name."
          id="SaveName"
          defaultValue="?"
        />
        <Button
         type="submit" 
        //  disabled={!formIsValid()}
         >
          Save & Quit
        </Button>
      </Grid>
    </Box>
  );
}
