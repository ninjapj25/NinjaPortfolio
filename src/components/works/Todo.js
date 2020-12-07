import React from "react";
import TodoImage from "../image/Todo.PNG";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { Spring } from "react-spring/renderprops";

export default function Todo() {
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
            <img width="100%" src={TodoImage} alt="Todo Website" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h4">
                Todo
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Personal project for CRUD in React.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              href="https://ninjapj25.github.io/TodoReactApp/"
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
