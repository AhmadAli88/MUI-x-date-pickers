

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';
import React from 'react';

const DateTimePickerExample = () => {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="Select Date & Time"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateTimePickerExample;

// import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { TextField } from '@mui/material';
// import PropTypes from 'prop-types';

// const DatePicker = ({ label, value, onChange }) => {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <MuiDatePicker
//         label={label}
//         value={value}
//         onChange={onChange}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// };

// // Define prop types
// DatePicker.propTypes = {
//   label: PropTypes.string.isRequired,  // 'label' should be a string and is required
//   value: PropTypes.object,             // 'value' should be a 'dayjs' object (optional)
//   onChange: PropTypes.func.isRequired  // 'onChange' should be a function and is required
// };

// export default DatePicker;
