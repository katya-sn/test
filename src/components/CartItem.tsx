import {
  Box,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { CartBook } from "../types/cartItem";
import { CartContext } from "../Context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { Add, Remove } from "@mui/icons-material";

type Props = {
  book: CartBook;
};

export const CartItem: React.FC<Props> = ({ book }) => {
  const { cartList, cartDispatch } = useContext(CartContext);

  const handleRemoveProduct = () => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: book });
  };

  const changeAmount = (newQuantity: number) => {
    cartDispatch({
      type: "UPDATE_AMOUNT",
      payload: cartList.map((item) =>
        item.id === book.id ? { ...item, quantity: newQuantity } : item
      ),
    });
  };

  const handleIncreaseAmount = () => {
    changeAmount(book.quantity + 1);
  }
  const handleReduceAmount = () => {
    const newQuantity = book.quantity - 1;
    newQuantity === 0 ? handleRemoveProduct() : changeAmount(newQuantity);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      changeAmount(+value);
    }
  };

  return (
    <Card
      key={book.title}
      sx={{
        width: { xs: "290px", lg: "706px" },
        height: "148px",
        display: "flex",
        gap: "12px",
        alignItems: "center",
        boxShadow: "none",
      }}
    >
      <Box
        display="flex"
        height="100%"
        alignItems="center"
        bgcolor="#3030301A"
        borderRadius="30px"
        sx={{
          width: { xs: "249px", lg: "665px" },
          gap: { xs: "12px", lg: "24px" },
        }}
      >
        <CardMedia
          component="img"
          src={book.photo}
          alt={book.title}
          sx={{
            ml: "10px",
            borderRadius: "30px",
            objectFit: "cover",
            height: "105px",
            width: "105px",
          }}
        />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column", lg: "row" },
            width: { xs: "212px", lg: "516px" },
            mr: "10px",
          }}
        >
          <Typography variant="h6" textAlign="center" sx={{width: {lg: '212px'}}}>
            {book.title}
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{width: {lg: '212px'}}}>
            ${book.price}
          </Typography>
          <Box
            className="cart_item-quantity"
            display="flex"
            alignItems="center"
          >
            <IconButton onClick={handleReduceAmount}>
              <Remove fontSize="small" />
            </IconButton>
            <TextField
              type="tel"
              value={book.quantity}
              onChange={handleQuantityChange}
              sx={{
                width: "30px",
                "& input": {
                  padding: "0",
                  textAlign: "center",
                },
                "& .MuiInputBase-input": {
                  fontSize: "1rem",
                  padding: "8px 0",
                },
              }}
            />
            <IconButton onClick={handleIncreaseAmount}>
              <Add fontSize="small" />
            </IconButton>
          </Box>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{width: {lg: '212px'}}}>
            ${book.price * book.quantity}
          </Typography>
        </Box>
      </Box>

      <IconButton
        onClick={handleRemoveProduct}
        aria-label="Delete item"
        sx={{ p: 0 }}
      >
        <DeleteIcon sx={{ width: "21px", height: "21px", color: "#252525" }} />
      </IconButton>
    </Card>
  );
};
