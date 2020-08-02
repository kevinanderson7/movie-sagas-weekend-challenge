import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class ButtonAppBar extends Component {
  render() {
    return (
      <div>
        <AppBar color="default" position="static">
          <Toolbar>
            <Typography variant="h4">Movie Saga Application</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default ButtonAppBar;
