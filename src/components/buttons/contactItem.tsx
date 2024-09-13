import { Box, Button, Typography } from "@mui/material";
import { ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  to: string;
}

export const ContactItem = ({ icon, label, to }: ContactItemProps) => {
  return (
    <Button
      component="a"
      href={to}
      target="_blank"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
        width: "267px",
        justifyContent: "flex-start",
        textTransform: "none",
      }}
    >
      <Box sx={{ color: "secondary.main" }} alignItems='center' display='flex'>{icon}</Box>
      <Typography variant="body1" color="primary.light">
        {label}
      </Typography>
    </Button>
  );
};