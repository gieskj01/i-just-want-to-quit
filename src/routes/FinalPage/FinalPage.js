import { Typography } from "@mui/material";
import React from "react";
import Image from "mui-image";
import cake from "./cake.gif";

export default function FinalPage() {
  return (
    <>
      <Image src={cake} width={100} alt={'Cake is a lie'}/>
      <Typography variant={'h3'}> You Quit! </Typography>
    </>
  );
}
