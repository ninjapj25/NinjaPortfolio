import React from "react";
import { Typography } from "@material-ui/core";
import { Spring } from "react-spring/renderprops";

export default function AboutText() {
  return (
    <Spring
      from={{ opacity: 0, marginBottom: -200 }}
      to={{ opacity: 1, marginBottom: 0 }}
      config={{ delay: 2000, duration: 2000 }}
    >
      {(props) => (
        <Typography
          className="about-text"
          style={props}
          align="center"
          variant="h3"
          component="h3"
        >
          I am a self taught Web Developer. Specializing on making websites
          using MERN STACK. I have been studying Web Development for 2 years. I
          jumped from one language to another. But I fell in love with MERN
          STACK and started working from there. I'm a team player that wants to
          share my knowledge to my teammate if that would help them with their
          problems. I am keen on studying new technologies just to improve my
          craft. I have studied cypress as well for testing. Please see my
          personal projects on Works Tab.
        </Typography>
      )}
    </Spring>
  );
}
