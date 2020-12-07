import React from "react";
import { Spring } from "react-spring/renderprops";
import { Typography } from "@material-ui/core";

export default function SelfTaught() {
  return (
    <Spring
      from={{ opacity: 0, marginRight: -2500 }}
      to={{ opacity: 1, marginRight: 0 }}
      config={{ delay: 2500, duration: 1000 }}
    >
      {(props) => (
        <Typography style={props} variant="h2" component="h2">
          I am a self taught Web Developer
        </Typography>
      )}
    </Spring>
  );
}
