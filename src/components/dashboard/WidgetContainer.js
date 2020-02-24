import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5)
  },
}));

const WidgetContainer = props => {
  const classes = useStyles();
  const { widgets } = props;
  return (
    <div className={classes.root}>
      {widgets.map(widget => (
        <widget.widget key={widget.id} />
      ))}
    </div>
  );
};

export default WidgetContainer;
