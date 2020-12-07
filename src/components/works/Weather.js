import React from "react";
import WeatherImage from "../image/Weather.PNG";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { Spring } from "react-spring/renderprops";

export default function Weather() {
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
            <img width="100%" src={WeatherImage} alt="Weather App Website" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h4">
                Weather
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A website to know the weather.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              href="https://ninjapj25.github.io/WeatherReactApp/"
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
