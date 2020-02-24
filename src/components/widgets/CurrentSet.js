import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Song from "../Song";
import { firestoreConnect } from "react-redux-firebase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    backgroundColor: "#333333"
  },
  song: {
    right: 0
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  content: {
    flexGrow: 1
  },
  songOrder: {
    fontFamily: "Segoe Script"
  }
}));

const CurrentSet = props => {
  const classes = useStyles();
  const { currentSet } = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Grid
            container
            spacing={3}
            direction="column"
            className={classes.content}
          >
            <Grid item className={classes.song}>
              <Typography>Welcome</Typography>
              <Song id="welcome" song={currentSet.welcome.song} />
            </Grid>
            <Divider />
            <Grid item>
              <Typography>Meet and Greet</Typography>
              <Song id="meet_greet" song={currentSet.welcome.song} />
            </Grid>
            <Divider />
            <Grid item>
              <Typography>Main 1</Typography>
              <Song id="main1" song={currentSet.welcome.song} />
            </Grid>
            <Divider />
            <Grid item>
              <Typography>Main 2</Typography>
              <Song id="main2" song={currentSet.welcome.song} />
            </Grid>
            <Divider />
            <Grid item>
              <Typography>Main 3</Typography>
              <Song id="main3" song={currentSet.welcome.song} />
            </Grid>
            <Divider />
            <Grid item>
              <Typography>Invitational</Typography>
              <Song id="invitational" song={currentSet.welcome.song} />
            </Grid>
            <Divider />
            <Grid item>
              <Typography>Backup Invitational</Typography>
              <Song id="backup_invitational" song={currentSet.welcome.song} />
            </Grid>
            <Divider />
            <Grid item>
              <Typography>Walk Out</Typography>
              <Song id="walk_out" song={currentSet.welcome.song} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    currentSet: state.currentSet
  };
};

export default compose(
  firestoreConnect(["current_set"]),
  connect(mapStateToProps)
)(CurrentSet);
