import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Puzzle002() {
  const [text, setText] = useState('');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (text === 'Answer') {
      setValid(true);
    } else {setValid(false)}
  }, [text]);

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <p>The Answer is Your Clue</p>
        <TextField
          autoComplete="off"
          value={text}
          onChange={(e) => setText(e.target.value)}
          error={!valid}
          // label={!valid ? 'Wrong' : ''}
          // helperText={valid ? 'Incorrect entry.' : 'Yo'}
          id="SaveName"
          placeholder="Name?"
          variant="outlined"
        />
        <Button
        disabled={!valid} component={ Link } to="/puzzle003"
        >Save & Quit</Button>
      </Grid>
    </Box>
  );
}
