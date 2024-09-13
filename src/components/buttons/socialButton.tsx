import React from "react";
import { IconButton } from "@mui/material";

interface SocialButtonProps {
  icon: React.ElementType;
  link: string;
  ariaLabel: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon: IconComponent,
  link,
  ariaLabel
}) => {
  return (
    <IconButton
      component="a"
      href={link}
      target="_blank"
      aria-label={ariaLabel}
      rel="noopener noreferrer"
      sx={{
        backgroundColor: 'secondary.main',
        width: '30px',
        height: '30px',
        objectFit: 'cover',
        "& .MuiSvgIcon-root": {
          borderRadius: '30px',
          fontSize: '24px',
          color: 'white',
          bgcolor: 'none',
        },
      }}
    >
      <IconComponent />
    </IconButton>
  );
};

export default SocialButton;
