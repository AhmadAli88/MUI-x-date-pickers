import { useState } from 'react';
import DatePicker from './components/Date Picker With Time'; // Adjust the path to where DatePicker is located
import InlineDatePickerExample from './components/Inline Pickers';
import ValidatedDatePickerExample from './components/Validation & Formatting';
import TimePickerExample from './components/Time Selection';
import ControlledComponent from './components/Date Picker';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Date Picker Example</h1>
      <DatePicker
        label='Select a Date'
        value={selectedDate}
        onChange={handleDateChange}
      />
      <p>
        Selected Date:{' '}
        {selectedDate ? selectedDate.format('YYYY-MM-DD') : 'No date selected'}
      </p>
      <InlineDatePickerExample />
      <ValidatedDatePickerExample />
      <TimePickerExample />
      <ControlledComponent />
    </div>
  );
}

export default App;
