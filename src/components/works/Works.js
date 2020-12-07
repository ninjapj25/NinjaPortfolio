import { Box } from "@material-ui/core";

import React from "react";
import WorksHeader from "./WorksHeader";
import Recipe from "./Recipe";
import Todo from "./Todo";
import Typing from "./Typing";
import Weather from "./Weather";

export default function Works() {
  return (
    <Box display="flex" height="100vh" width="85%" className="right-column">
      <Box
        mt={5}
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        width="100%"
        height="100%"
      >
        <Box width="100%">
          <WorksHeader />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          width="35%"
          height="45%"
          className="work-cards"
          mr={5}
        >
          <Recipe />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          width="35%"
          height="45%"
          className="work-cards"
        >
          <Todo />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          width="35%"
          height="45%"
          className="work-cards"
          mt={2}
          mr={5}
        >
          <Typing />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          width="35%"
          height="45%"
          className="work-cards"
          mt={2}
        >
          <Weather />
        </Box>
      </Box>
    </Box>
  );
}
