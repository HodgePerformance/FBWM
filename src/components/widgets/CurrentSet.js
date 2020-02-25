import React, { Component } from "react";
import { css } from "@emotion/core";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Divider
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Song from "../Song";
import { firestoreConnect } from "react-redux-firebase";
import PropagateLoader from "react-spinners/PropagateLoader";

const useStyles = theme => ({
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
  avatar: {
    backgroundColor: red[500]
  },
  content: {
    flexGrow: 1
  },
  songOrder: {
    fontFamily: "Segoe Script"
  },
  loading: {
    color: 'black'
  },
  loadingAnimation: {
    paddingleft: theme.spacing(10)
  }
});
const override = css`
  left: '15px',
`;

class CurrentSet extends Component {
  render() {
    const { classes, currentSet } = this.props;
    if (currentSet === undefined) {
      return (
        <div>
          <PropagateLoader css={override}></PropagateLoader>
        </div>
      );
    } else {
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
                  <Song
                    id="backup_invitational"
                    song={currentSet.welcome.song}
                  />
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
    }
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    currentSet: state.firestore.currentSet
  };
};

export default compose(
  firestoreConnect(() => ["current_set"]),
  connect(mapStateToProps),
  withStyles(useStyles)
)(CurrentSet);
