import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import TestWidget from "../widgets/TestWidget";

const widgets = [];

class WidgetContainer extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        {widgets.map(widget => (
          <Grid item key={widget.id}><widget.widget /></Grid>
        ))}
      </Grid>
    );
  }
}

export default WidgetContainer;
