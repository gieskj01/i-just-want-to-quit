import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Puzzle002() {
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (text === "Answer") {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [text]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ flexDirection: "column" }}
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
      <Button disabled={!valid} component={Link} to="/puzzle003">
        Save & Quit
      </Button>
    </Box>
  );
}
