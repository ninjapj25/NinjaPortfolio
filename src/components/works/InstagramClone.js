import React from "react";
import Insta from "../image/insta.PNG";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { Spring } from "react-spring/renderprops";

export default function InstagramClone() {
  return (
    <Spring
      from={{
        marginRight: -50,
        opacity: 0,
      }}
      to={{
        marginRight: 0,
        opacity: 1,
      }}
      config={{
        duration: 1000,
        delay: 2000,
      }}
    >
      {(props) => (
        <Card style={props}>
          <CardActionArea>
            <img
              width="100%"
              height="50%"
              src={Insta}
              alt="Instagram Clone Website"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h4">
                Instagram
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A MERN project
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              href="https://ninjainstaclone.herokuapp.com/"
              target="_blank"
              color="primary"
              className="card-btn"
            >
              View
            </Button>
          </CardActions>
        </Card>
      )}
    </Spring>
  );
}
