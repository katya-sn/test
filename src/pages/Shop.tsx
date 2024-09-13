import { Helmet } from "react-helmet";
import { Catalog } from "../components/Catalog";
import logo from "../assets/logo.svg";

export const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop Page - LivroMundo</title>
        <meta name="description" content="Discover books with LivroMudo." />
        <meta name="keywords" content="shop, books, book, buy, app" />
        <meta property="og:title" content="Shop Page - LivroMundo" />
        <meta property="og:description" content="Discover books with LivroMudo." />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://example.com/home" />
      </Helmet>
      <Catalog />
    </>
  );
};
