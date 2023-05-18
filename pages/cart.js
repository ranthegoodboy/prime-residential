import React from "react";
import Head from "next/head";
import ShoppingCart from "../components/header/shopping-cart/ShoppingCart";

const cart = () => {
  return (
    <>
      <Head>
        <title>My Cart</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ShoppingCart />
    </>
  );
};

export default cart;
