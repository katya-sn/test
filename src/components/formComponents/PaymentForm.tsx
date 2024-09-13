import {
  Box,
  Button,
  Typography,
  SelectChangeEvent,
  IconButton,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import SnackbarNotification from "../SnackBar";

export const PaymentForm = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formValues, setFormValues] = useState({
    nameOnCard: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    securityCode: "",
  });

  const [errors, setErrors] = useState({
    nameOnCard: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    securityCode: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<
          HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    if (name === "nameOnCard") {
      const filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: filteredValue,
      }));
    } else if (name === "cardNumber" || name === "securityCode") {
      const filteredValue = value.replace(/\D/g, "").slice(0, 16);
      const formattedValue = filteredValue.replace(/(\d{4})(?=\d)/g, "$1 ");

      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: formattedValue,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    if (formValues.nameOnCard.length < 5) {
      newErrors.nameOnCard = "Name on card must be at least 5 characters";
      isValid = false;
    }

    if (formValues.cardNumber.length !== 12) {
      newErrors.cardNumber = "Card number must be exactly 12 digits";
      isValid = false;
    }

    if (formValues.expirationMonth === "") {
      newErrors.expirationMonth = "Month is required";
      isValid = false;
    }

    if (formValues.expirationYear === "") {
      newErrors.expirationYear = "Year is required";
      isValid = false;
    }

    if (
      formValues.securityCode.length !== 3 &&
      formValues.securityCode.length !== 4
    ) {
      newErrors.securityCode = "Security code must be 3 or 4 digits";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate a successful form submission
      setOpenSnackbar(true);
      console.log(formValues);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        width: { xs: "320px", lg: "400px" },
        margin: "0 auto",
        height: { xs: "640px", lg: "auto" },
        minHeight: { lg: "729px" },
        bgcolor: "primary.dark",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          pt: {xs: '15px', lg: '60px'},
          width: "280px",
          bgcolor: "primary.dark",
          color: "primary.light",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h3" alignSelf="flex-start">
          Card Details
        </Typography>

        <Divider
          sx={{
            width: "280px",
            borderColor: "#D9D9D9",
            borderWidth: 1,
          }}
        />

        <Box
          sx={{
            textAlign: "center",
            height: "87px",
          }}
        >
          <Typography variant="h6" sx={{ color: "primary.light" }}>
            Select payment method
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => alert("MasterCard")}>
              <img src="/src/assets/mastercard.svg" alt="MasterCard" />
            </IconButton>
            <IconButton onClick={() => alert("ApplePay")}>
              <img src="/src/assets/apple.svg" alt="ApplePay" />
            </IconButton>
            <IconButton onClick={() => alert("Visa")}>
              <img src="/src/assets/visa.svg" alt="Visa" />
            </IconButton>
          </Box>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap="12px" mb={3}>
            <InputField
              id="nameOnCard"
              name="nameOnCard"
              label="Name on card"
              placeholder="Meet Patel"
              value={formValues.nameOnCard}
              onChange={handleChange}
              error={!!errors.nameOnCard}
              helperText={errors.nameOnCard}
            />
            <InputField
              id="cardNumber"
              name="cardNumber"
              label="Card Number"
              placeholder="0000 0000 0000 0000"
              value={formValues.cardNumber}
              onChange={handleChange}
              error={!!errors.cardNumber}
              helperText={errors.cardNumber}
              type="tel"
            />
            <Box display="flex" gap="8px">
              <SelectField
                id="expirationMonth"
                name="expirationMonth"
                label="Month"
                onChange={handleChange}
                error={!!errors.expirationMonth}
                value={formValues.expirationMonth}
                items={Array.from({ length: 12 }, (_, i) =>
                  (i + 1).toString().padStart(2, "0")
                )}
              />
              <SelectField
                id="expirationYear"
                name="expirationYear"
                label="Year"
                value={formValues.expirationYear}
                onChange={handleChange}
                error={!!errors.expirationYear}
                items={Array.from({ length: 10 }, (_, i) =>
                  (new Date().getFullYear() + i).toString()
                )}
              />
            </Box>
            <InputField
              id="securityCode"
              name="securityCode"
              placeholder="Code"
              label="Card Security Code"
              value={formValues.securityCode}
              onChange={handleChange}
              helperText={errors.securityCode}
              error={!!errors.securityCode}
              type="tel"
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              borderRadius: "30px",
              bgcolor: "secondary.main",
              color: "secondary.dark",
            }}
          >
            Continue
          </Button>
        </form>
      </Box>
      <SnackbarNotification
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message="Form successfully submitted!"
      />
    </Box>
  );
};
