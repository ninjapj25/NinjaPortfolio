import { Typography } from "@material-ui/core";
import React from "react";
import { Spring } from "react-spring/renderprops";

export default function WorksHeader() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -200 }}
      to={{ opacity: 1, marginLeft: 0 }}
      config={{ delay: 500, duration: 2000 }}
    >
      {(props) => (
        <Typography style={props} variant="h1" component="h1">
          My Works
        </Typography>
      )}
    </Spring>
  );
}
