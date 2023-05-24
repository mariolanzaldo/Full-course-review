import React, { useState } from 'react';
import './App.css';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
import Gallery from './components/Gallery';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"

function App(): React.ReactElement {
  const [perPage, setPerPage] = useState(4);

  const handleChange = (event: SelectChangeEvent <number>) => {
    
    setPerPage(Number(event.target.value) as any);
  };

  return (
    <>
      <Box m={2} sx={{ minWidth: 50 }}>
      <FormControl
        sx={{
          width: "20%"
        }}
      >
        <InputLabel id="simple-select-label">Count</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={perPage}
          label="Count"
          onChange={handleChange}
        >
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="8">8</MenuItem>

        </Select>
      </FormControl>
    </Box>
      <Gallery id="1" count={perPage} />

    </>
  );
}

export default App;
