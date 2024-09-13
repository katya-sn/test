import {
  Email,
  Facebook,
  Instagram,
  LocationOn,
  Phone,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import { Box, Grid2 } from "@mui/material";
import { Logo } from "./Logo";
import SocialButton from "./buttons/socialButton";
import { ContactItem } from "./buttons/contactItem";

export const Footer = () => {
  return (
    <Box
      component="footer"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        height: { xs: "332px", lg: "247px" },
        backgroundColor: "primary.dark",
      }}
    >
      <Box
        display="flex"
        gap="32px"
        sx={{
          flexDirection: { xs: "column", lg: "row" },
          width: { xs: "276px", lg: "1290px" },
          justifyContent: "space-between",
        }}
      >
        <Grid2 container spacing="14px" direction="column" alignItems="center">
          <Logo />
          <Box display="flex" gap="12px" justifyContent="center">
            <SocialButton
              icon={Facebook}
              link="https://facebook.com"
              ariaLabel="Facebook"
            />
            <SocialButton
              icon={Instagram}
              link="https://instagram.com"
              ariaLabel="Instagram"
            />
            <SocialButton
              icon={Twitter}
              link="https://x.com"
              ariaLabel="Twitter"
            />
            <SocialButton
              icon={Pinterest}
              link="https://pinterest.com"
              ariaLabel="Pinterest"
            />
          </Box>
        </Grid2>

        <Grid2
          container
          spacing="0"
          direction={{ xs: "column" }}
          alignItems="center"
          sx={{
            width: { xs: "100%", lg: "267px" },
          }}
        >
          <ContactItem
            icon={<LocationOn />}
            label="Statensingel 52, 3039 LP Rotterdam, Netherlands"
            to="https://maps.app.goo.gl/mt87jF2wxKYAkEVS9"
          />
          <ContactItem
            icon={<Phone />}
            label="Mobile: +(84) 546-6789"
            to="tel:+845466789"
          />
          <ContactItem
            icon={<Email />}
            label="info@moviestore.nl"
            to="mailto:info@moviestore.nl"
          />
        </Grid2>
      </Box>
    </Box>
  );
};
