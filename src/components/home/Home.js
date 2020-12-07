import React from "react";

import { Box } from "@material-ui/core";
import IAmPJ from "./IAmPJ";
import ImagePJ from "./ImagePJ";
import SelfTaught from "./SelfTaught";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      alignContent="center"
      width="85%"
      height="100vh"
      className='right-column'
    >
      <Box mt={5}>
        <IAmPJ />
      </Box>
      <Box mt={10} display="flex" justifyContent="center">
        <ImagePJ />
      </Box>
      <Box mt={10}>
        <SelfTaught />
      </Box>
    </Box>
  );
}
