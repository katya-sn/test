import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import React, { useContext } from "react"
import { BookItem } from "../types/bookItem"
import theme from "../theme"
import { CartContext } from "../Context/CartContext"

type Props = {
  book: BookItem
}

export const CardItem: React.FC<Props> = ({ book }) => {
  const { cartList, cartDispatch } = useContext(CartContext);

  const isInCart = cartList.some(item => item.id === book.id);

  const addToCart = () => {
    if (book) {
      const newCartItem = {
        ...book,
        quantity: 1,
      };

      cartDispatch({ type: 'ADD_TO_CART', payload: newCartItem });
    }
  };

  const removeFromCart = () => {
    if (book) {
      const cartItemToRemove = {
        ...book,
        quantity: 0,
      };

      cartDispatch({ type: 'REMOVE_FROM_CART', payload: cartItemToRemove });
    }
  };

  return (
    <Card
    elevation={0}
    sx={{
      width: "307px",
      height: "394px",
      display: "flex",
      flexDirection: "column",
      bgcolor: theme.palette.primary.main,
      gap: "12px",
    }}
  >
    <a href={`/shop/${book.id}`}>
      <CardMedia
        component="img"
        height="276"
        src={book.photo}
        alt={`{book.title}-photo`}
      />
    </a>

    <CardContent
      sx={{
        padding: '10px',
        paddingBottom: '10px !important',
        height: '106px',
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        gap: "18px",
        bgcolor: theme.palette.primary.light,
        borderRadius: '30px'
      }}
    >
      <Typography variant="h6" component="div">
        {book.title}
      </Typography>

      <Box
        sx={{
          width: '100%',
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{flexGrow: 1, textAlign: 'center', color: theme.palette.secondary.contrastText}}>
          {book.price} $
        </Typography>
        <Button
          sx={{ width: '139px', backgroundColor: theme.palette.secondary.main, borderRadius: '30px'}}
          variant="contained"
          color="primary"
          onClick={isInCart ? removeFromCart : addToCart}
          >
            <Typography variant="button">
            {isInCart ? 'Added' : 'Buy'}
            </Typography>
        </Button>
      </Box>
    </CardContent>
  </Card>
  )
}