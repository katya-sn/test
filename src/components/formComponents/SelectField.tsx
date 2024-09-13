import React from "react";
import {
  Box,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: SelectChangeEvent<string>) => void;
  error: boolean;
  items: string[];
}

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
  items,
}) => (
  <Box display="flex" flexDirection="column" gap="8px" sx={{ height: "76px" }}>
    <InputLabel sx={{ color: "primary.light" }} htmlFor={id}>
      {label}
    </InputLabel>
    <Select
      variant="outlined"
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      error={error}
      displayEmpty
      sx={{
        width: "136px",
        height: "48px",
        "& .MuiSelect-select": {
          height: "100%",
          color: "primary.light",
          border: "none",
        },
        "& .MuiSelect-icon": {
          color: "primary.light",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: "30px",
          border: "1px solid white",
          height: "48px",
        },
        "& .MuiInputBase-input::placeholder": {
          color: "primary.light",
        },
      }}
    >
      <MenuItem value="" disabled>
      {label}
      </MenuItem>
      {items.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </Box>
);
