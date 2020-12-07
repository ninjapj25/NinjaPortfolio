import React from "react";
import { Typography } from "@material-ui/core";
import { Spring } from "react-spring/renderprops";

export default function IAmPJ() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -200 }}
      to={{ opacity: 1, marginLeft: 0 }}
      config={{ delay: 500, duration: 2000 }}
    >
      {(props) => (
        <Typography style={props} variant="h1" component="h1">
          HI I AM PJ
        </Typography>
      )}
    </Spring>
  );
}
