import React from "react";
import { Box, Button } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Logo from "../image/Logo.svg";
import { Link } from "react-router-dom";

export default function SideNavigation() {
  return (
    <Box
      display="flex"
      flexWrap={"wrap"}
      flexDirection="column"
      className="menu"
      flexBasis="15%"
      height="110vh"
    >
      <Box display="flex" height="30%" justifyContent="center">
        <img src={Logo} height="100%" width="80%" alt="Ninja Logo" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        height="35%"
        width="100%"
        alignContent="center"
        justifyContent="space-around"
      >
        <Box display="flex" alignContent="center" justifyContent="center">
          <Link to="/home">HOME</Link>
        </Box>
        <Box display="flex" alignContent="center" justifyContent="center">
          <Link to="/about">ABOUT</Link>
        </Box>
        <Box display="flex" alignContent="center" justifyContent="center">
          <Link to="/works">WORKS</Link>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        height="15%"
        width="100%"
        alignContent="center"
        justifyContent="space-around"
      >
        <Box display="flex" alignContent="center" justifyContent="center">
          <Button
            size="large"
            variant="contained"
            className="contact-btn"
            target="_blank"
            href="https://www.facebook.com/Kurosakikulot"
          >
            <FacebookIcon size="large" />
          </Button>
        </Box>
        <Box display="flex" alignContent="center" justifyContent="center">
          <Button
            size="large"
            variant="contained"
            target="_blank"
            className="contact-btn"
            href="https://www.linkedin.com/in/rey-pj-baliguat-01a817200/"
          >
            <LinkedInIcon size="large" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
