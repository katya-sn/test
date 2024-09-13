import { Snackbar, Alert, SnackbarProps } from "@mui/material";
import React from "react";

interface SnackbarNotificationProps extends SnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const SnackbarNotification: React.FC<SnackbarNotificationProps> = ({
  open,
  onClose,
  message,
  ...props
}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose} {...props} aria-label="success-notification">
      <Alert onClose={onClose} severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarNotification;
