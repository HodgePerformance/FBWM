import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  withStyles
} from "@material-ui/core";
// Icons
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
// Images
import img from "../images/blessed_be_your_name.jpg";

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
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="overline">{song.title}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {song.artist}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={img}
        title="Live from space album cover"
      />
    </Card>
  );
}
