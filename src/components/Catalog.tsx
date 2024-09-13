import { Box, Button, Grid2, Typography } from "@mui/material";
import { books } from "../data/books";
import { CardItem } from "./Card";
import theme from "../theme";

export const Catalog = () => {
  return (
    <Box
      aria-label="shop-catalog"
      component='section'
      display='flex'
      flexDirection='column'
      alignItems='center'
      sx={{
        bgcolor: 'primary.main',
        maxWidth: { xs: "307px", lg: "1290px" },
        margin: "0 auto",
        padding: { xs: "60px 0", lg: "145px 0" },
        gap: { xs: "60px", lg: "38px" },
      }}
    >
      <Typography variant="h1" component="h1" sx={{ textAlign: "center" }}>
        SHOP
      </Typography>

      <Grid2
        container
        spacing={2}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
          columnGap: "20px",
          rowGap: { xs: "55px", lg: "38px" },
        }}
      >
        {books.map((book) => (
          <Grid2 key={book.id}>
            <CardItem book={book} />
          </Grid2>
        ))}
      </Grid2>

      <Button
        variant="contained"
        sx={{
          borderRadius: "30px",
          bgcolor: theme.palette.secondary.main,
          width: "230px",
          height: "60px",
        }}
      >
        <Typography variant="button">See more</Typography>
      </Button>
    </Box>
  );
};
