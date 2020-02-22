import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Grid, CardContent, List, ListItem, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Song from "../Song";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card:{
    backgroundColor: "#333333"
  },
  song:{
    right: 0,
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
    flexGrow: 1,
  },
  songOrder: {
    fontFamily: "Segoe Script",
  },
}));

const CurrentSet = props => {
  const classes = useStyles();
  const { currentSet } = props;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container spacing={2} direction="row" className={classes.content}>
            <Grid item xs={12} className={classes.song}>
              <Song id="welcome" song={currentSet.welcome.song} />
            </Grid>
            <Grid item>
              <Song id="welcome" song={currentSet.welcome.song} />
            </Grid>
            <Grid item>
              <Song id="welcome" song={currentSet.welcome.song} />
            </Grid>
            <Grid item>
              <Song id="welcome" song={currentSet.welcome.song} />
            </Grid>
            <Grid item>
              <Song id="welcome" song={currentSet.welcome.song} />
            </Grid>
            <Grid item>
              <Song id="welcome" song={currentSet.welcome.song} />
            </Grid>
            <Grid item>
              <Song id="welcome" song={currentSet.welcome.song} />
            </Grid>
            <Grid item>
              <Song id="welcome" song={currentSet.welcome.song} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentSet: state.currentSet
  };
};

export default connect(mapStateToProps)(CurrentSet);
