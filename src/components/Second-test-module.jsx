import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import React from 'react';

export default function SecondTestModule() {
  return (
    <Box className="card">
      <h2>Second Module</h2>
      <p>Includes Box, Chip & Select</p>
      <Chip>Chip</Chip>
      <Select placeholder="Select" variant="outlined" fullWidth />
    </Box>
  );
}
