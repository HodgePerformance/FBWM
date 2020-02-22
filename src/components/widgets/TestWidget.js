import React, { Component } from "react";
import { Card, Typography, CardContent } from "@material-ui/core";

class TestWidget extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography>THIS IS A TEST WIDGET</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default TestWidget;
