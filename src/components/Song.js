import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Grid } from "@material-ui/core";
// Icons
import Typography from "@material-ui/core/Typography";
// Images
import img from "../images/blessed_be_your_name.jpg";
import youtubeIcon from "../images/youtube.png";
import ulttabsIcon from "../images/ulttabs.png";
import pdfIcon from "../images/pdf.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    cursor: "pointer"
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
  info: {
    padding: theme.spacing(1),
    paddingBottom: 0
  },
  icon: {
    height: theme.spacing(5),
    width: theme.spacing(5)
  }
}));

export default function Song(props) {
  const classes = useStyles();
  const { song } = props;

  return (
    <React.Fragment>
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
      <div className={classes.info}>
        <Grid container justify="center" spacing={1}>
          <Grid item>
            <a href={song.youtube} target="blank">
              <img
                src={youtubeIcon}
                className={classes.icon}
                alt="youtube_icon"
              />
            </a>
          </Grid>
          <Grid item>
            <a href={song.ultTabs} target="blank">
              <img
                src={ulttabsIcon}
                className={classes.icon}
                alt="ultTabs_icon"
              />
            </a>
          </Grid>
          <Grid item>
            <a
              href="/images/blessed-be-your-name-a.pdf"
              target="blank"
              download
            >
              <img src={pdfIcon} className={classes.icon} alt="pdf_icon" />
            </a>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
