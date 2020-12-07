import { Box } from "@material-ui/core";
import React from "react";
import AboutHeader from "./AboutHeader";
import AboutText from "./AboutText";

export default function About() {
  return (
    <Box
      display="flex"
      width="85%"
      flexWrap="wrap"
      className="right-column"
      justifyContent="center"
    >
      <Box mt={5} width="100%">
        <AboutHeader />
        <Box mt={10} width="100%" display="flex" justifyContent="center">
          <Box width="80%">
            <AboutText />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
