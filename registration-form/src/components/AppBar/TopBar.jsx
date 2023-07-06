import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

function TopBar() {
  return (
    <div className="appBar">
      <AppBar position="static">
        <Toolbar>
          <Button to="/" color="inherit">
            <Typography variant="h6">Registration</Typography>
          </Button>
          <Button to="/login" color="inherit">
            <Typography variant="h6">Login</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
