import React from "react";
import RecipeImage from "../image/Recipe.PNG";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { Spring } from "react-spring/renderprops";

export default function Recipe() {
  return (
    <Spring
      from={{
        marginLeft: -50,
        opacity: 0,
      }}
      to={{
        marginLeft: 0,
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
            <img width="100%" src={RecipeImage} alt="Recipe Website" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h4">
                Recipe
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A website used to search for Recipes
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              href="https://ninjapj25.github.io/RecipeReactApp/"
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
