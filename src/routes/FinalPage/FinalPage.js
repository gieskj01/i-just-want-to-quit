import { Typography } from "@mui/material";
import React from "react";
import Image from "mui-image";
import cake from "./cake.gif";
import { Grid } from "@mui/material";

export default function FinalPage() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}         justifyContent="center"
        alignItems="center">
          <Image
            src={cake}
            width={100}
            style={{ display: "block" }}
            alt={"Cake is a lie"}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"h3"}> You Quit! </Typography>
        </Grid>
      </Grid>
    </>
  );
}
