import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, TextField } from '@mui/material';
import React from 'react';

const InlineDatePickerExample = () => {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <DatePicker
          label="Inline Date Picker"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} />}
          InputProps={{
            sx: {
              width: '200px',
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default InlineDatePickerExample;