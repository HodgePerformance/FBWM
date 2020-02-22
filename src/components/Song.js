import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import img from '../images/blessed_be_your_name.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function Song(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { song } = props;
  console.log(song);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={img}
        title="Live from space album cover"
      />
      <CardContent className={classes.content}>
          <Typography component="h5" variant="h7">
            {song.title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {song.artist}
          </Typography>
        </CardContent>
      {/* <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h7">
            {song.title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {song.artist}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
        </div>
      </div> */}
    </Card>
  );
}
