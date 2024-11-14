import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';

const ValidatedDatePickerExample = () => {
  const [value, setValue] = React.useState(null);

  // Custom date validation
  const validate = (newValue) => {
    return newValue.isAfter(dayjs().subtract(1, 'month'));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date Picker with Validation"
        value={value}
        onChange={(newValue) => {
          if (validate(newValue)) {
            setValue(newValue);
          }
        }}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="MM/dd/yyyy"
      />
    </LocalizationProvider>
  );
};

export default ValidatedDatePickerExample;