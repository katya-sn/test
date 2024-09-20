import { useContext } from "react";
import { CartItem } from "../components/CartItem";
import { CartContext } from "../Context/CartContext";
import { Box, Divider, Typography } from "@mui/material";
import theme from "../theme";
import { PaymentForm } from "../components/formComponents/PaymentForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from "../assets/logo.svg";

export const Cart = () => {
  const { cartList, totalPrice } = useContext(CartContext);

  return (
    <>
      <Helmet>
        <title>Cart Page - LivroMundo</title>
        <meta name="description" content="Look at my Cart Page." />
        <meta name="keywords" content="cart, app, services" />
        <meta property="og:title" content="Cart Page - LivroMundo" />
        <meta property="og:description" content="Look at my Cart Page." />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://example.com/home" />
      </Helmet>
      <Box
        aria-label="cart"
        component="section"
        width="100%"
        sx={{
          bgcolor: theme.palette.primary.main,
          padding: { xs: "60px 0", lg: "145px 0" },
        }}
      >
        <Box
          aria-label="cart-container"
          component="div"
          display="flex"
          alignItems="center"
          borderRadius="50px"
          sx={{
            flexDirection: { xs: "column", lg: "row" },
            width: { xs: "320px", lg: "1217px" },
            minHeight: { lg: "729px" },
            margin: "0 auto",
            bgcolor: theme.palette.primary.light,
            alignItems: "stretch",
            overflow: "hidden",
          }}
        >
          <Box
            component="div"
            sx={{
              bgcolor: theme.palette.primary.light,
              width: { lg: "817px" },
              pl: { xs: "15px", lg: "60px" },
              minHeight: { xs: "100px", lg: "729px" },
              flexGrow: 1,
            }}
            display="flex"
            flexDirection="column"
            gap="24px"
          >
            <Box width='100%'>
              <Typography
                aria-label="cart-title"
                variant="h3"
                component="h2"
                sx={{
                  marginTop: { lg: "60px" },
                  height: { xs: "44px", lg: '36px' },
                  marginLeft: { xs: "10px" },
                }}
              >
                Shopping Cart
              </Typography>
              
            </Box>
            <Divider
                sx={{
                  width: {xs: '100%', lg: '665px'},
                  borderColor: "#D9D9D9",
                  borderWidth: 1,
                }}
              />
            {cartList.length > 0 ? (
              <Box
                component="div"
                aria-label="cart-list"
                gap={3}
                flexDirection="column"
                display="flex"
                marginBottom={10}
              >
                {cartList.map((item) => (
                  <CartItem book={item} key={item.title} />
                ))}
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column-reverse", lg: "row" },
                    alignItems: "left",
                    width: "100%",
                    gap: { lg: "251px" },
                  }}
                >
                  <Box
                    component={Link}
                    to={"/shop"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      border: "none",
                      background: "none",
                      color: "primary.contrastText",
                      cursor: "pointer",
                      padding: 0,
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <Typography component="span" variant="h6">
                      {"<"}
                    </Typography>
                    <Typography component="span" variant="h6">
                      Back to shop
                    </Typography>
                  </Box>

                  <Box
                    component="div"
                    aria-label="cart-total-price"
                    sx={{
                      display: "flex",
                      gap: { xs: "51px", lg: "78px" },
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      Subtotal
                    </Typography>

                    <Typography variant="h3">Rs. {totalPrice}</Typography>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Typography variant="h3" component="h2">
                There are no items in the cart yet
              </Typography>
            )}
          </Box>
          <PaymentForm />
        </Box>
      </Box>
    </>
  );
};
