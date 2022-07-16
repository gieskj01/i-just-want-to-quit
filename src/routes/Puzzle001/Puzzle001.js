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
  const [version, setVersion] = useState(5);
  const [dialogToggle, setDialogToggle] = useState(false);
  const [dialogNumber, setDialogNumber] = useState(5);

  useEffect(() => {
    if (buttonCount === version) {
      setDialogToggle(true);
      setDialogNumber(version);
      console.log(dialogNumber);
    }
  }, [buttonCount, version, dialogNumber]);

  const buttonCounter = () => {
    setbuttonCount(buttonCount + 1);
  };

  const handleDialog = () => {
    setDialogToggle(!dialogToggle);
    setbuttonCount(0);
    setVersion(version + 1);
  };

  const dialogText = () => {
    let message;
    switch (dialogNumber) {
      case 5:
        message = "Why are you quitting already?";
        break;
      case 6:
        message = "You might be making a mistake!";
        break;
      case 7:
        message = "You are missing the party!!";
        break;
      case 8:
        message = "We were going to have cake!!!";
        break;
      case 9:
        message = "Fine - just quit already ...";
        break;

      default:
        message = "That button below ↓↓ that says QUIT... you should probably click it.";
        break;
    }

    return message;
  };

  return (
    <>
      <Dialog
        open={dialogToggle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to quit?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogText()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button component={Link} to="/puzzle002">
            Quit
          </Button>
          <Button onClick={handleDialog} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Button onClick={buttonCounter} variant="contained">
        Quit
      </Button>

      <Typography>{`ver00.${version}`}</Typography>
    </>
  );
}
