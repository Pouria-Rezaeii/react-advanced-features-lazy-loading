import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from 'react';

export default function FirstTestModule() {
  return (
    <Grid className="card">
      <h2>First Module</h2>
      <p>Includes Grid, TextField & Button</p>

      <TextField placeholder="Text Field" variant="outlined" fullWidth />
      <Button variant="contained" color="primary" fullWidth>
        Button
      </Button>
    </Grid>
  );
}
