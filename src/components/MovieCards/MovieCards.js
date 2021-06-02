import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./MovieCards.css";
import { useStyles } from "./moviecardsStyles";

export default function MovieCards({ movies }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={4} key={movie.imdbID}>
            <Card className={classes.root}>
              <CardMedia className={classes.mediaCard}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="imgPoster"
                />
              </CardMedia>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {movie.Title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {movie.Year}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
