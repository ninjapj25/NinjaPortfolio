import React from "react";
import { Spring } from "react-spring/renderprops";
import Profile from "../image/profile.svg";

export default function ImagePJ() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -200 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 2000, duration: 2000 }}
    >
      {(props) => <img style={props} src={Profile} alt="Profile Picture" />}
    </Spring>
  );
}
