import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function FirstButton() {
    const [buttonCount, setbuttonCount] = useState(0)

const buttonAction = () => {
    return console.log('clicked')
}

  return <Button onClick={buttonAction} variant="contained">Quit</Button>;
}
