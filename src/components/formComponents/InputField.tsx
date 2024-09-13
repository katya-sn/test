import React from "react";
import { Box, TextField, InputLabel } from "@mui/material";

interface InputFieldProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error: boolean;
  helperText: string;
  type?: string;
  pattern?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  type = "text",
}) => (
  <Box
    display="flex"
    flexDirection="column"
    gap="8px"
    sx={{ color: "primary.light", height: '76px'}}
  >
    <InputLabel sx={{ color: "primary.light" }} htmlFor={id}>
      {label}
    </InputLabel>
    <TextField
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      error={error}
      helperText={helperText}
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          height: '48px',
          "& fieldset": {
            borderRadius: "30px",
            borderColor: "primary.light",
          },
          "&:hover fieldset": {
            bgcolor: "rgba(255, 255, 255, 0.1)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "primary.light",
          },
        },
        "& .MuiOutlinedInput-input": {
          color: "primary.light",
        },
        "& .MuiInputBase-input::placeholder": {
          color: "white",
        },
      }}
    />
  </Box>
);
