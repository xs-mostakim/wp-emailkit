
import TextField from "@mui/material/TextField";

const DateAndTimePicker = ({ handleTime }) => {
  return (
    <TextField
      id="datetime-local"
      type="datetime-local"
      sx={{ width: 250 }}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={handleTime}
    />
  );
};

export default DateAndTimePicker;
