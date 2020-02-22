import React, { Component } from "react";
import { Grid } from "@material-ui/core";

class WidgetContainer extends Component {
  render() {
    const { widgets } = this.props;
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
