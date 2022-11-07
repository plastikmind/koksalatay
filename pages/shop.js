import React from "react";

import { client } from "../lib/client";
import Product from "../components/Product";
import Header from "../components/Header";

const shop = ({ products }) => (
  <div className="">
    <Header />
    <div className="flex items-center justify-center pt-32">
      <p className="text-2xl sm:text-4xl md:text-5xl  font-thin italic">SHOP</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
      {products?.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default shop;
