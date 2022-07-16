import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function FirstButton() {
  const [buttonCount, setbuttonCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (buttonCount === 5) {
      setToggle(true);
    }
  }, [buttonCount]);

  const buttonCounter = () => {
    setbuttonCount(buttonCount + 1);
    return console.log(buttonCount);
  };

  return (
    <>
      {toggle ? (
        <Dialog
          open={true}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want to quit?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              We hope you don't want to leave so soon! The fun is just beginning. . .
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button component={ Link } to="/puzzle002">Quit</Button>
            <Button component={ Link } to="/finalpage" autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Button onClick={buttonCounter} variant="contained">
          Quit
        </Button>
      )}
      <Typography>Ver 0.005</Typography>
    </>
  );
}
